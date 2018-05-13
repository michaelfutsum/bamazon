var mysql = require("mysql");
var prompt = require("prompt");

//Connection to Database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon_DB'
});

// Starts Code
var startExecuting = function () {

    connection.query("SELECT * FROM Products", function (err, result) {
        return (prettyTable(result));

    });

    setTimeout(function () {
        prompt.get(['ItemID', 'Quantity'], function (err, result) {
            var shopperItem = result.item_id;
            var shopperQuantity = result.quantity;

            inventoryCheck(shopperItem, shopperQuantity);
            setTimeout(function () { execute(); }, 3500);

        });
    }, 750);
}

// Can't sell what you don't have. Time to check the inventory with this handy function!

var inventoryCheck = function (id, quantity) {
    connection.query('SELECT * FROM products_list WHERE item_id = ' + id, function (err, result) {
        if (err) throw err;

        var total = result[0].price * quantity;

        var inventory = result[0].stock - quantity;

        if (inventory < 0) {
            console.log('Insufficient stock. There are only ' + result[0].stock + 'item(s) left.');
        } else {
            console.log('User has bought ' + quantity + ' ' + result[0].product + ' for $' + total);
            console.log('There are ' + inventory + ' ' + result[0].product + ' remaining.')
            databaseUpdate(id, inventory)
        }
    });
}

//Database Update
var update = function (id, quantity) {
    connection.query('update products set stock = ' + stock + ' where item_id = ' + id, function (err, result) {
        if (err) throw err;
    });
}


//Making the table look good!
function prettyTable(items) {
    for (var i = 0; i < items.length; i++) {
        console.log('------------------------');
        console.log('ItemID: ' + items[i].item_id);
        console.log('Item: ' + items[i].product);
        console.log('Department: ' + items[i].department);
        console.log('Price: $' + items[i].price);
    }
    console.log('------------------------');
}


// Connecting to the Bamazon Database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    startExecuting();
});


