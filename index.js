import http, { request } from 'http';

const server = http.createServer((req,res)=>{
    if (req.method === "GET") {
        res.write("hello world and its a get request");
    }
    res.end();
});

server.listen(5000,(err,data)=>{
    console.log("server is listening on 5000");
})