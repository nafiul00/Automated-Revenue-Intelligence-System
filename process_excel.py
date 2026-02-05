import pandas as pd
import json
import os
import numpy as np

data_dir = "Data"
output_file = "src/lib/data.json"

def process_data():
    raw_data = {}
    files = {
        'customers': 'customers.xlsx',
        'products': 'products.xlsx',
        'refunds': 'refunds.xlsx',
        'sales': 'sales_transactions.xlsx'
    }
    
    for key, filename in files.items():
        path = os.path.join(data_dir, filename)
        if os.path.exists(path):
            df = pd.read_excel(path)
            df = df.replace({np.nan: None})
            # Convert ALL timestamps in the dataframe to strings before storing or processing
            for col in df.columns:
                if pd.api.types.is_datetime64_any_dtype(df[col]):
                    df[col] = df[col].dt.strftime('%Y-%m-%d')
            raw_data[key] = df
    
    if 'sales' not in raw_data or 'products' not in raw_data or 'refunds' not in raw_data:
        print("Missing required Excel files.")
        return

    # Conversion Rate USD to BDT (Approximate for demo)
    CONV_RATE = 120.0

    sales_df = raw_data['sales']
    refunds_df = raw_data['refunds']
    products_df = raw_data['products']
    
    # Financial Metrics (Converted to BDT)
    total_gross = sales_df['net_amount'].sum() * CONV_RATE
    total_refunds = refunds_df['refund_amount'].sum() * CONV_RATE
    net_revenue = total_gross - total_refunds
    
    # Daily Revenue Trends (Converted to BDT)
    temp_sales = sales_df.copy()
    temp_sales['transaction_date'] = pd.to_datetime(temp_sales['transaction_date'])
    daily_revenue = temp_sales.groupby('transaction_date')['net_amount'].sum().reset_index()
    daily_revenue['net_amount'] = daily_revenue['net_amount'] * CONV_RATE
    daily_revenue['transaction_date'] = daily_revenue['transaction_date'].dt.strftime('%Y-%m-%d')
    
    # Region Breakdown (Converted to BDT)
    regional_revenue = (sales_df.groupby('region')['net_amount'].sum() * CONV_RATE).to_dict()
    
    # Product Category Breakdown (Converted to BDT)
    merged_sales = sales_df.merge(products_df[['product_id', 'category']], on='product_id', how='left')
    category_revenue = (merged_sales.groupby('category')['net_amount'].sum() * CONV_RATE).to_dict()
    
    # Growth Calculation (Wow)
    last_date = temp_sales['transaction_date'].max()
    week_ago = last_date - pd.Timedelta(days=7)
    two_weeks_ago = last_date - pd.Timedelta(days=14)
    
    current_week_rev = temp_sales[temp_sales['transaction_date'] > week_ago]['net_amount'].sum() * CONV_RATE
    prev_week_rev = temp_sales[(temp_sales['transaction_date'] > two_weeks_ago) & (temp_sales['transaction_date'] <= week_ago)]['net_amount'].sum() * CONV_RATE
    
    growth_rate = ((current_week_rev - prev_week_rev) / prev_week_rev * 100) if prev_week_rev > 0 else 0
    
    final_data = {
        'currency': '৳',
        'metrics': {
            'revenue': round(float(net_revenue), 2),
            'orders': int(len(sales_df)),
            'avg_order_value': round(float((total_gross / len(sales_df))), 2),
            'customer_count': int(len(raw_data['customers'])),
            'refund_rate': round(float((len(refunds_df) / len(sales_df)) * 100), 2),
            'weekly_growth': round(float(growth_rate), 2),
        },
        'trends': daily_revenue.tail(30).to_dict(orient='records'),
        'regions': {k: float(v) for k, v in regional_revenue.items()},
        'categories': {k: float(v) for k, v in category_revenue.items()},
        'recent_sales': sales_df.head(15).tail(10).to_dict(orient='records'),
        'segments': raw_data['customers']['customer_segment'].value_counts().to_dict(),
        'raw': {
            'customers': raw_data['customers'].head(50).to_dict(orient='records'),
            'products': raw_data['products'].head(50).to_dict(orient='records'),
            'refunds': raw_data['refunds'].head(50).to_dict(orient='records')
        }
    }
    
    # Also convert individual net_amounts in recent_sales for UI consistency
    for item in final_data['recent_sales']:
        item['net_amount'] = item['net_amount'] * CONV_RATE

    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w') as f:
        json.dump(final_data, f, indent=2, sort_keys=True)
    print(f"Production data generated at {output_file} in BDT")

if __name__ == "__main__":
    process_data()
