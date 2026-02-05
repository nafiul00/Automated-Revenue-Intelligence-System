import pandas as pd
import os

files = ['customers.xlsx', 'products.xlsx', 'refunds.xlsx', 'sales_transactions.xlsx']
for file in files:
    if os.path.exists(file):
        try:
            df = pd.read_excel(file)
            print(f"File: {file}")
            print(f"Columns: {df.columns.tolist()}")
            print(f"Shape: {df.shape}")
            print(df.head(2))
            print("-" * 30)
        except Exception as e:
            print(f"Error reading {file}: {e}")
