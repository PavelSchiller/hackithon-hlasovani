const express = require("express");

const app = express();

const fs= require('fs');

const csvFilePath='votes.csv';

const csv=require('csvtojson');

app.get("/", (req, res) => {
    
    fs.readFile('votes.csv','utf8',function(err,data){
        res.send(data);
    })
})

app.listen(3000, () => {
    console.log("Server is running");
})