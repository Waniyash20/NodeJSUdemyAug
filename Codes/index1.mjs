import fs from "fs";
import path from "path";

const filepath = "./Contents/message.txt";

console.log(path.dirname(filepath));
console.log(path.extname(filepath));
console.log(path.isAbsolute(filepath));         //C:/users/desktop   is an absolute path example.
console.log(path.basename(filepath));

fs.readFile("./contents/message.txt", (err, content)=>{

    if(err) 
        {
            console.log(err);
            console.log("Error occured while reading file.")
            return false;
        }

    console.log(content.toString());


})

