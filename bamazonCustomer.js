var mysql = require("mysql");
var inquirer = require(inquirer);

//creates connection for sql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

//connets mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer

    //need to show bamazon table 
        .prompt({
            name: "whatToBuy",
            type: "list",
            message: "Please select the [ID] of the item you would like to purchase",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        })
        .prompt({
            name: "quantity",
            type: "number",
            message: "How many units would you like to buy?"
        })



}
