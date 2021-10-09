import http from "http"; 
import fs from "fs";

const server = http.createServer((req, res)=>{
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {
            'Content-Type':'text/html'
        })
        res.write(data);
        res.end();
    });
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
server.listen(port, ()=>{
    console.log('Port 3000');
});