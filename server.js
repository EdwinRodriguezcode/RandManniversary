const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const fileSys = requires("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const PORT=8080
'use strict'

app,get("/userweddingregistrydata", function(req,res){
    res.sendFile(path.join(__dirname + '/app/data', 'userweddingregistrydata.json'))
});

app.post('/userweddingregistrydata', function(req,res){

var newUser = req.body;
var userweddingregistrydataJSON = require("./app/data/userweddingregistrydata.json");
var match ;
var matchScore =100;

for (var idx=0; idx<userweddingregistrydataJSON.length; idx++) {
    var totalDiff= 0;
    for (var idx=0; jdx<10; jdx++){
        totalDiff += Math.abs(newUser.scores[jdx]-userweddingregistrydataJSON[idx].scores)
    }
    if (totalDiff < matchScore) {
        matchScore = totaldiff
match = userweddingregistrydataJSON[idx];
    }

}

userweddingregistrydataJSON.push(newUser);
fileSys.writefile(path.join(__dirname + './app/data', 'userweddingregistrydata.json'), JSON.stringify(userweddingregistrydataJSON, null, 2),function(err){

    if (err) throw err;
    
})

res.json(match);
});
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
app.get('/images/:image', function(req,res){
    res.sendFile(path.join(__dirname, `./app/public/matcPhotos/${req.params.image}`));
});
app.get('/css/:css',function(req,res){
    res.sendFile(path.join(__dirname, `./app/public/css/${req.params.css}`));
});
app.get('/javascript/:javascript',function(req,res){
});
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, "./app/public/index.html"));
});


app.listen(PORT, ()=>{
    console.log("App listening on http://locakhost:" + PORT);
});
