const dip = require("../src/index");

// dip.stock.symbols.getStockList().then((data)=>{
//     console.log(data);
// });

<<<<<<< HEAD
// dip.stock.symbols.getBoards("600005").then((data)=>{
//     console.log(JSON.stringify(data));
// });

// dip.stock.trading.getWeekHis("sh600005").then((data)=>{
//     console.log(data);
// });

// dip.stock.trading.getDailyHis("17","sh000001").then((data)=>{
//     console.log(JSON.stringify(data));
// });
    
// dip.stock.trading.getMin("sh600026").then((data)=>{
//     console.log(JSON.stringify(data));
// });
// dip.stock.symbols.getStockIssue("000725").then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.symbols.getIndustryList().then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.symbols.getConceptList().then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.symbols.getAreaList().then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.index.getComponents("BK0447").then(data=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.finance.getGuideLine("000651","2018").then(data=>{
//     console.log(JSON.stringify(data));
// })
dip.stock.finance.getBalanceSheet("600519","2018","general").then(data=>{
    console.log(JSON.stringify(data));
})
// dip.stock.finance.getCashFlowStatment("600030","2019","security").then(data=>{
//     console.log(JSON.stringify(data));
// })
=======
// stock.trading.getMonthHis("sh600005").then((data) => {
//     console.log(data);
// });

dip.stock.fundflow.getStockTrendHis("sh600005").then((data) => {
    console.log(data);
});
>>>>>>> 41bf9ecd13c70028b460016f6f26c5af3f478b4e
