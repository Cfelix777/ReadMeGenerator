var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// questions //
let questions = [
    {
        type: "input",
        message: "What is your favorite pizza?",
        
    },{
        type: "input",
        message: "What is your favorite cookie?",
        
    },{
        type: "input",
        message: "What is your favorite food?",
        
    },{
        type: "input",
        message: "What is your favorite song?",
        
    },{
        type: "input",
        message: "What is favorite car?",
        
    },{
        type: "input",
        message: "What is your favorite or dream vacation spot?",
    },{
        type: "input",
        message: "What is your favorite drink?",
    }
];



inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 