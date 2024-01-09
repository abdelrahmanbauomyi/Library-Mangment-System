const express = require('express');
const router = require('./routes/router');
const app = express()
app.use('/',router)
app.listen({port:8000},async () => {
    console.log('running!!');}
    );