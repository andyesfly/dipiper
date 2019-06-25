const stock = require("../src/index");

stock.symbols.getStockList().then((data)=>{
    console.log(data);
});
    
