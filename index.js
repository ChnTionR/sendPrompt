const http = request('http');

const server = createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        console.log(prompt("send me a message"));
        res.end();
    }else{
        res.StatusCode = 404;
        res.end('page not found');
    }
});

server.listen(process.env.PORT || 3000, ()=>{console.log('server running on' + process.env.PORT);});