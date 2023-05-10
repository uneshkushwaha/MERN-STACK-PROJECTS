// without package.json ,we can't install our packages:- npm init
// npm i express to install the express server
import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import DefaultData from './default.js';

const app =express(); // initialized the express
dotenv.config();


const PORT =8000;

const USERNAME=process.env.DB_USERNAME;

const PASSWORD=process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);

app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`)); //to make server and it takes two argument i.e PORT AND CALL FUNCTION

DefaultData();