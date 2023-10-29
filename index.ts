// import express from 'express';
const express = require('express')
import noterouter from './src/routes/notebookRoutes';



const app = express();
app.use(express.json())

app.use('/notes', noterouter)


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port : ${port}`));