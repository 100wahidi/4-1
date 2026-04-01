import pandas as pd
import pandera as pa
import numpy as np
DATA = pd.read_csv('src\\reference.csv')

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
    missing_values_map = DATA.isnull().sum().to_dict()

    # 2. Préparation des échantillons (Samples)
    # On remplace les NaN/Inf par None pour la compatibilité JSON
    def sanitize_df(df):
        return df.replace([np.inf, -np.inf], np.nan).where(pd.notnull(df), None).to_dict(orient="records")

    # Sample de doublons (les 5 premiers)
    duplicate_sample = sanitize_df(DATA[duplicate_mask].head(5))
    
    # Sample de lignes avec au moins une valeur nulle (les 5 premières)
    null_sample = DATA[DATA.isnull()]

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
print(get_overview()['details']['null_rows_sample'])
# envoyer base au back 

# envoyer base au back 