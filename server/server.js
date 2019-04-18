const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const api=require('./Routes/api.js');
const cors=require('./middlewares/cors.js');

const app=express();

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server Started');
});