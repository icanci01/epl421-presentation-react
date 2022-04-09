var express = require('express');
var app = express();

const Client = require('ftp');
const fs = require("fs");
const c = new Client();


function getFileList(dirname){
    var res = {}
    res['type'] =[]
    res['name'] =[]
    c.on('ready', function () {
        c.list(dirname, function (err, list) {
            if (err) throw err;
            for(i=0;i<list.length;i++){
                res['type'].push(list[i].type);
                res['name'].push(list[i].name);
            }
            JSON.stringify(res);
            console.log(res);
            c.end()
        });
    });
    return res;
}

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
  });
  
  app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
  });

// c.connect({
//     host: '127.0.0.1',
//     user: 'epl421user1',
//     password: 'user1'
// });

// const Client = require('ftp');
// const fs = require("fs");
// const c = new Client();

// c.on('ready', function () {
//     c.get('onetextfile.txt', function(err, stream) {
//         if (err) throw err;
//         stream.once('close', function() { c.end(); });
//         stream.pipe(fs.createWriteStream('C:\\Users\\ikalai01\\Desktop\\HW2\\foo.local-copy.txt'));
//       });
//     });

// c.connect({
//     host: '127.0.0.1',
//     user: 'epl421user1',
//     password: 'user1'
// });

// const Client = require('ftp');
// const fs = require("fs");
// const c = new Client();

// function changeDir(dirname){

//     c.on('ready', function () {
//         c.cwd(dirname, function() {});
//         c.list( ".", function (err, list) {
//                     if (err) throw err;
//                     for(i=0;i<list.length;i++)
//                         console.log(list[i]);
//                     c.end()
//                 });


//     });

// }




c.connect({
    host: '127.0.0.1',
    user: 'epl421user1',
    password: 'user1'
});

//changeDir('folder1');