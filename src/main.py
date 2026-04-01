from fastapi import FastAPI, HTTPException
import pandas as pd
import pandera as pa
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Data Quality API - SG ATS")

global DATA 
DATA=pd.read_csv("reference.csv")

# --- Configuration CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Schéma de Référence ---
# Utilisation de coerce=True pour éviter les erreurs de type simples (ex: "10" vs 10)
SCHEMA_REFERENCE = pa.DataFrameSchema({
    "kri": pa.Column(pa.String, pa.Check.str_matches(r"^[\w\sÀ-ÿ#'-]+$"), name="consistency"),
    "ggi": pa.Column(pa.Int, pa.Check.ge(0), coerce=True, name="valid_id"),
    "common_name": pa.Column(pa.String, nullable=True),
    "bl": pa.Column(pa.String, nullable=True),
    "subbl": pa.Column(pa.String, nullable=True),
    "pending_date": pa.Column(pa.String, pa.Check.str_matches(r"^\d{4}-\d{2}-\d{2}$"), name="format_date"),
    "snapshot_date": pa.Column(pa.String, pa.Check.str_matches(r"^\d{4}-\d{2}-\d{2}$"), name="format_date"),
    "traitement": pa.Column(pa.String, pa.Check.isin(["yes", "no"]), name="valid_status"),
    "exposure_days": pa.Column(pa.Float, pa.Check.ge(0), coerce=True, name="non_negative"),
}, strict=False)

@app.get("/loading")
def loading_data():
    """Charge et retourne les données brutes du CSV."""
    try:
       
        # On remplace les NaN par None pour le JSON
        # the nan values kpis are already calculated
        return DATA.where(pd.notnull(DATA), "error").to_dict(orient="records")
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Le fichier reference.csv est introuvable.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/overview")
# donner moi un code compatible ou overvie front :
def get_overview():
    # 1. Calcul des métriques de base
    total_rows = len(DATA)
    total_columns = len(DATA.columns)
    
    # Doublons
    duplicate_mask = DATA.duplicated()
    duplicate_count = int(duplicate_mask.sum())
    unique_rows = total_rows - duplicate_count
    uniqueness_percent = round((unique_rows / total_rows * 100), 2) if total_rows > 0 else 0

    # Complétude (Valeurs non-nulles)
    total_cells = DATA.size
    null_count = DATA.isnull().sum().sum()
    completeness_percent = round(((total_cells - null_count) / total_cells * 100), 2) if total_cells > 0 else 0
    
    # Valeurs manquantes par colonne
    missing_values_map = DATA.isnull().sum().fillna("null value").to_dict()

    # 2. Préparation des échantillons (Samples)
    # On remplace les NaN/Inf par None pour la compatibilité JSON
    def sanitize_df(df):
        return df.replace([np.inf, -np.inf], np.nan).where(pd.notnull(df), None).to_dict(orient="records")

    # Sample de doublons (les 5 premiers)
    duplicate_sample = sanitize_df(DATA[duplicate_mask].head(5))
    
    # Sample de lignes avec au moins une valeur nulle (les 5 premières)
    null_sample = sanitize_df(DATA[DATA.isnull().any(axis=1)].head(5))

    # 3. Construction de la réponse finale
    return {
        "overview": {
            "total_rows": total_rows,
            "total_columns": total_columns,
            "duplicate_rows": duplicate_count,
            "unique_rows": unique_rows,
            "completeness_percent": completeness_percent,
            "uniqueness_percent": uniqueness_percent,
            "missing_values": missing_values_map,
        },
        "details": {
            "duplicate_rows_sample": duplicate_sample,
            "null_rows_sample": null_sample,
            "columns": DATA.columns.tolist()
        }
    }



@app.get("/validation")
def validate():
    """
    Exécute la validation Pandera et retourne un rapport enrichi :
    - Les erreurs détaillées (column, check, failure_case, index)
    - Le nombre total de lignes (pour le calcul du % en React)
    """
    try:
        total_rows = len(DATA)
        
        try:
            SCHEMA_REFERENCE.validate(DATA, lazy=True)
            return {
                "status": "success", 
                "total_rows": total_rows,
                "report": []
            }
            
        except pa.errors.SchemaErrors as e:
            # Extraction du rapport d'erreurs
            report = e.failure_cases
            
            # Sélection et renommage pour correspondre à ton besoin React
            # Note: Pandera nomme la valeur erronée 'failure_case'
            output_columns = ["column", "check", "failure_case", "index"]
            filtered_report = report[output_columns].copy()
            
            # On convertit tout en string/standard pour éviter les erreurs JSON avec les types numpy
            result_list = filtered_report.fillna("null value").to_dict(orient="records")
            
            return {
                "status": "failed",
                "total_rows": total_rows,
                "report": result_list
            }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur interne lors de la validation : {str(e)}")

@app.get('/KriAnalytics')
def kri_analysis():
    # pivot table pour le ploting des kris en fonctions de snapshot dates 
    # avec un filtre sur les kris:
    pivoted=pd.pivot_table(DATA,index='snapshot_date',columns='kri',values='ggi',aggfunc=len,fill_value=0)
    time=pivoted.index.tolist()
    kris=pivoted.columns.tolist()
    
    return {"table":pivoted.reset_index().to_dict(orient="records"),"time":time,"kris":kris}
  
@app.get('/KriInsights')
def kri_insights():

    return {"total": len(DATA),
        "number_business": DATA[DATA['ggi']!=0].shape[0]
            ,"number_individual": DATA[DATA['ggi']==0].shape[0]}

@app.get("/kri/top-offenders")
def get_top_kris():
    top_5 = DATA['kri'].value_counts().head(5).reset_index()
    top_5.columns = ['kri', 'count']
    return top_5.to_dict(orient="records")
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)