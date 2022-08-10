import util from "util"; //can concat the large syntax
import http from "http";
import url from "url";

http
.createServer((req, res)=>{

    const requestPath = req.url;

    const response = util.format("User is looking for %s" , requestPath)

    res.end(response);
})
.listen(3000);

