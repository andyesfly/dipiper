const dip = require("../src/index");

// stock.symbols.getStockList().then((data)=>{
//     console.log(data);
// });

// stock.trading.getMonthHis("sh600005").then((data) => {
//     console.log(data);
// });

dip.stock.symbols.getBoards("600005").then((data) => {
    console.log(data);
});
