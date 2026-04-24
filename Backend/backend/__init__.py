import pymysql

pymysql.install_as_MySQLdb()

# Django strictly checks the version of MySQLdb. PyMySQL pretends to be an old version.
# We must mock the version to convince Django 6 that it's up to date.
import MySQLdb
MySQLdb.version_info = (2, 2, 1, "final", 0)
