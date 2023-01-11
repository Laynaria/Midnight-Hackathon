require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
    process.env;

  const connection = await mysql.createConnection({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`drop database if exists ${MYSQL_DATABASE}`);
  await connection.query(`create database ${MYSQL_DATABASE}`);
  await connection.query(`use ${MYSQL_DATABASE}`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
