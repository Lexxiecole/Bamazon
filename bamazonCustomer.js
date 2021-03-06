// require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

// create connection to db
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "Bamazon"
})

function start(){
// prints items for sale and their details
connection.query('SELECT * FROM Products', function(err, res){
    if(err) throw err; //do I need to include type of error thrown?

console.log('<<<<<<<<<<<---Welcome to BAMazon--->>>>>>>>>>>')
console.log('----------------------------------------------')
}


for(var i = 0; i<res.length; i++){
    console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: $" +res[i].Price + " | " + "Stock Quantity: " + res[i].StockQuantity + " | ")
    console.log('--------------------------------------------------------------------------------------------------')
    
}

console.log(' ');
inquirer.prompt([
    {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?",
        validate: function(value){
            if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "qty",
        message: "How many would you like to purchase?",
        validate: function(value){
            if(isNaN(value)){
                return false;
            } else {
                return true; 
            }
        }
    }



Collapse 