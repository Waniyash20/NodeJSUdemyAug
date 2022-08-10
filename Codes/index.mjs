import fs from "fs";


fs.readFile("./contents/message.txt", (err, content)=>{

    if(err) 
        {
            console.log(err);
            console.log("Error occured while reading file.")
            return false;
        }

    console.log(content.toString());


})