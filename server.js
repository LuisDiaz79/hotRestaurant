// CODE GOES HERE
var express = require("express");
var path = require("path");
var connection = require("./db/connection");

var app = express();
var PORT = 3000;

// Configure the express app to accept JSON from the client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
// ============  tables
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    connection.query("SELECT * FROM tables", function (err, dbTables) {
        if(err){
            return res.status(500).end();
        }
        res.json(dbTables);
    });
});
//=======================
//==============    RESERVATIONS
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/reserve", function (req, res) {
    console.log("req.body:", req.body);
    let newRes = req.body;
    connection.query('SELECT count(*) as "count" FROM tables where isWaiting = true',function(err,result){
        if(err){
            return res.status(500).end();
        }
        console.log(result);
        let count = parseInt(result.count);
        if(count>5 ){
            newRes.isWaiting = true;
        }else{
            newRes.isWaiting = false;
        }
    });
    console.log(newRes);
    connection.query('INSERT INTO tables SET ?', newRes, function(error, result){
        if(error){
            return res.status(500).end();
        }
        else res.json(result);
    });
});

// Start the app on port 3000 and log a message
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});