#DATA SCIENCE
#ENGENHARIA DE DADOS - ETLS
#NOME: EMILIANO
#DATA: 17/08/2023

import mysql.connector
import pandas as pd

conn = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = 'positivo',
    database = 'northwind',
    port = 3306
)

conn_multidim = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = 'positivo',
    database = 'multidim',
    port = 3306
)

select_statment = 'select product_name from products'
cursor = conn.cursor()
cursor.execute(select_statment)
result = cursor.fetchall()
prod_df = pd.DataFrame(result, columns=['product_name'])
cursor_multidim = conn_multidim.cursor()

for i, r in prod_df.iterrows():
    insert_statment = f"insert into dim_produto values({i+1}, '{r['product_name']}')"
    #print(insert_statment)
    cursor_multidim.execute(insert_statment)
    conn_multidim.commit()

prod_df = prod_df['product_name'].unique()