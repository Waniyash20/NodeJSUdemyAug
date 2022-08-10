import util from "util"; 
import http from "http";
import url from "url";
import os from "os";  // info about operating system

import { getDateTime } from "./Time/index.mjs"

http
.createServer((req, res)=>{

    const requestPath = req.url;
    const platform = os.platform();
    const arch = os.arch();
    const response = util.format("User is looking for %s. Application is running on %s and %s. The current time is %s" , requestPath, platform, arch, getDateTime() )

    res.end(response);
})
.listen(3000);