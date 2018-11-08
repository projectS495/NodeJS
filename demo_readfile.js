var http = require('http');
// var fs = require('fs');
var fs = require('fs');


// // append file append the text to newly created txt file
fs.appendFile('mynewfile1.txt','Hello Content!', function(err){
    if(err){
        console.log('error');
        throw err;
    } else {
        console.log('Saved!');
    }
});
// open file overwrite the created file
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// writefile  same as open file
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//  update the text file
fs.appendFile('mynewfile1.txt', ' This is the updated text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// replace the content of the write file
// this function those no totally replace the text
fs.writeFile('mynewfile3.txt', 'This is a replace text for write file', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

// this function delete the files created
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
        console.log('File deleted!');
});

// renaming an existing file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);