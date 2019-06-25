const stock = require("../src/index");

// stock.symbols.getStockList().then((data)=>{
//     console.log(data);
// });

stock.trading.getMonthHis("sh600005").then((data)=>{
    console.log(data);
});
    
