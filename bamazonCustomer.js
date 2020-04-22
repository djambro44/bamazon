var mysql = require("mysql");
var inquirer = require("inquirer");

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
    showTable();
});

function showTable () {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.log(results);
        start(results);
    });


}

function start(results) {
    inquirer

    
        .prompt([{
            name: "whatToBuy",
            type: "list",
            message: "Please select the [ID] of the item you would like to purchase",
            choices:  Array.from(results, x => x.id)

        },{
            name: "quantity",
            type: "number",
            message: "How many units would you like to buy?"
        }])
        
        .then(function(answer){
            console.log(answer);
        
            console.log("SELECT * FROM products WHERE id =" + answer.whatToBuy);
          connection.query("SELECT * FROM products WHERE id =" + answer.whatToBuy, function(err, results) {
              if (err) throw err;
            console.log(results);
            console.log(answer.quantity)
            console.log(results[0].stock_quantity);
            if(answer.quantity <= results[0].stock_quantity) {
                console.log("approved");
            }else {
                console.log("denied");
            }
          })
        })



}
