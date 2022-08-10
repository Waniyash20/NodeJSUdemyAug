//yargs package allows to read the arguments and receive them with the name
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const fs = require("fs");

//console.log(argv);   In Terminal, type: node phonebook.js --name="Yash" --email="abc@def.com"

//const name= argv.name;
//const email = argv.email;
//console.log(name, email);   In Terminal, type: node phonebook.js --name="Yash" --email="abc@def.com"

    //Destructuring is used to simplify above methods.
//const { name , email} = argv;
//console.log(name, email);

//Destructig allows to add some operatins like add, store, search etc.
const { name , email, operation} = argv;
//console.log(name, email, operation);

const filepath = "./phonebook.json";

switch (operation) {
  case "add": {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        throw "File read error occured";
      }
      const content = JSON.parse(data);
      content.push({ name, email });
      fs.writeFile(filepath, JSON.stringify(content), () => {
        console.log("New user added to phonebook.");
      });
    });

    break;
  }

  case "list": {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        throw "File read error occured";
      }
      const content = JSON.parse(data);

      content.forEach((person) => {
        console.log(`---------------------------------------`);
        console.log(`Name: ${person.name}`);
        console.log(`Email: ${person.email}`);
        console.log(`---------------------------------------`);
      });
    });

    break;
  }

  default:
    break;
}

//In Terminal, type:
//node phonebook.js --name="Yash" --email="abc@def.com" --operation="add"
//--name="ABC" --email="pqr@xyz.com" --operation="add"          this data will get added in .json file


// Search
//  - Name
// Add
//     - Name
//     - Email
// Delete
//     - Name
