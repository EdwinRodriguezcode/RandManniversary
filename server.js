const express = require('express')
const app= require('./app');
const PORT = 8080;

app.listen(PORT, () => {
    console.log('runnin on http://localhost:' + PORT)
})