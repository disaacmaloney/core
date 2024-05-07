require('dotenv').config();

import * as sql from 'mssql';

const connection = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true,
  }
};

export async function connectionDb(){
    try{
        const pool = await sql.connect(connection);
        return pool;
    }
    catch(err){
        console.log('Error in connection to database');
        console.log(err);
    }
}