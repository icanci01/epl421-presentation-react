const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

const Client = require('ftp');
const fs = require("fs");
const { type } = require("os");
const c = new Client();



app.use(cors());

app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: true }));   // support encoded bodies



app.use("/download", (req, res) => {
    console.log("Received Request!");
    filename=req.body.filename
    console.log(filename)
    c.connect({
        host: '127.0.0.1',
        user: 'epl421user1',
        password: 'user1'
    });
    c.on('ready', function () {
        c.get(filename, function(err, stream) {
            if (err) return;
            stream.once('close', function() { c.end(); });
            stream.pipe(fs.createWriteStream('C:\\Users\\ikalai01\\Desktop\\HW2\\'+filename));
          });
    });
    
  });





app.use("/list", (req, res) => {
    
    console.log("Received Request!");
    path = req.body.path;
    c.connect({
        host: '127.0.0.1',
        user: 'epl421user1',
        password: 'user1'
    });
    
    c.on('ready', function () {
        c.cwd(path, function() {});
        c.list(path, function (err, list) {
            if (err) throw err;
            c.end()
            if (res.headersSent) return;
            return res.send(list)
            
        });
    });
    
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));