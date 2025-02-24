import sqlite3

connection = sqlite3.connect("userdb")
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS user (username TEXT, salt BLOB, hash BLOB)")
cursor.execute("insert into user values (?,?,?)", ("test", "test", "test"))
for row in cursor.execute("SELECT * FROM user"):
    print(row)
connection.close()