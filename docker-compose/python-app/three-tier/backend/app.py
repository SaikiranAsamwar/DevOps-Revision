from flask import Flask
import mysql.connector
import os
import time

app = Flask(__name__)

def get_db_connection():
    while True:
        try:
            conn = mysql.connector.connect(
                host="mysql",
                user="root",
                password="root",
                database="mydb"
            )
            return conn
        except:
            print("Waiting for MySQL...")
            time.sleep(3)

@app.route("/")
def home():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS test (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50))")
    cursor.execute("INSERT INTO test (name) VALUES ('Python DevOps')")
    conn.commit()

    cursor.execute("SELECT * FROM test")
    data = cursor.fetchall()

    return f"Data: {data}"

app.run(host="0.0.0.0", port=5000)
