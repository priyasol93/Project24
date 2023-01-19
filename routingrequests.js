const h1=require('http');
const server=h1.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.write('<html>');
    res.write('<head><title>Enter a Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');

    res.write('</html>');
   return  res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My FirstPage</title></head>');
    res.write('<body><h2>Hello welcome to node JS</h2></body>');

    res.write('</html>');
    res.end();
// console.log(req.url);
// console.log(req.url,req.method,req.headers);
});
server.listen(300);