import http from "http";
import url from "url";

http
.createServer((req, res)=>{

    const requestPath = req.url;

    res.end("user is looking for" + requestPath);
})
.listen(3000);