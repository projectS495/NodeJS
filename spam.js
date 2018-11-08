var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var randomstring = require("randomstring");
var url = require('url');
var nodemailer = require('nodemailer');
var message = "";
var interval = 0.7 * 1000; // 10 seconds;
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (q.pathname == '/spamEmail') {
        var errCount = 0;
        var to = q.query.to;
        var count = q.query.count;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'dio.jomar495@gmail.com',
                pass: 'n2U4g9s&D5#uR7%k'
            }
        });
        for(x=0;x<=count;x++){
            setTimeout( function (x) {
                var subject = randomstring.generate();
                var text = randomstring.generate();
                var text = '👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻';
                var mailOptions = {
                from: 'DEMENTOR 👻 <foo@blurdybloop.com>',
                to: to,
                subject: subject,
                text: text
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    message = error;
                    errCount++;
                    if(errCount == 1){
                        transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'kyozetsu495@gmail.com',
                                pass: 'n2U4g9s&D5#uR7%k'
                            }
                        });
                    }
                } else {
                    message = 'Email sent: ' + info.response
                    console.log('Email sent: ' + info.response);
                }
            });
            }, interval * x, x);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1 style="color: green">JomBot : Email Spammer</h1>');
        res.write('<form action="spamEmail" method="get" enctype="multipart/form-data">');
        res.write('<center><input type="text" name="to" value="'+to+'" placeholder="Where to send"><br>');
        res.write('<input type="number" name="count" value="'+ count +'" placeholder="Count Of email to send"><br>');
        res.write('<input type="submit"></center>');
        res.write('</form>');
        res.write(message);
        return res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1 style="color: green">JomBot : Email Spammer</h1>');
        res.write('<form action="spamEmail" method="get" enctype="multipart/form-data">');
        res.write('<input type="text" name="to" placeholder="Where to send"><br>');
        res.write('<input type="number" name="count" placeholder="Count Of email to send"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);