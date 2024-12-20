const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if(req.url === '/'){

        if(req.method === 'GET'){

            fs.readFile(path.join(__dirname, 'public', 'site.html'), 'utf8', (err, data)=>{

                if(err){
                    res.statusCode = 500;
                    res.end('error occured when loading page');
                }else{
                    res.statusCode = 200;
                    res.end(data);
                }
            });
        }

        if(req.method === 'POST'){
            let message = '';
            req.on('data', (chunk)=>{message += chunk;});
            req.on('end', ()=>{
                console.log(message);
                res.end();
            });
        }
    }else{
        res.StatusCode = 404;
        res.end('page not found');
    }

    
});

server.listen(process.env.PORT || 3000, ()=>{console.log('server running on ' + (process.env.PORT || 3000));});