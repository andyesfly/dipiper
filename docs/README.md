# dipiper
这是一个开源的财经数据接口包，实现对股票、基金等金融数据的采集、清洗加工的工具，满足金融量化分析师和学习数据分析的人在数据获取方面的需求
。      

从数据采集到数据可视化都用同一种开发语言，降低了学习成本，让我们专注于分析模型的研究。



# 安装
` cnpm install dipiper --save `

使用方法   
```
const dip = require("dipiper");

dip.symbols.getStockList().then((data)=>{
    //数据存储、处理逻辑，请自行实现
    console.log(data);
})
```