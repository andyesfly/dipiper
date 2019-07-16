指数接口包括行业、概念、地域指数的日、周、月历史K线数据，以及指数包含的成份股。接口所用的参数：**code** 通过基础数据中的[行业板块](Stock-Base?id=%e8%a1%8c%e4%b8%9a%e6%9d%bf%e5%9d%97%e5%88%97%e8%a1%a8)、[概念板块](Stock-Base?id=%e6%a6%82%e5%bf%b5%e6%9d%bf%e5%9d%97%e5%88%97%e8%a1%a8)、
[地域板块](Stock-Base?id=%e5%9c%b0%e5%9f%9f%e6%9d%bf%e5%9d%97%e5%88%97%e8%a1%a8)获取。以下不在赘述！！！

## 指数日线数据

- 接口用途  
    获取指数日线历史数据
- 接口调用说明  
``` javascript
dip.stock.index.getDailyHis("BK0447").then(data=>{
    //数据存储、处理逻辑，请自行实现
})
```
- 参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>行业、概念、地域代码</td></tr>
        </tbody>
    </table>
- 返回说明 正常时的返回JSON数据包示例： 
``` json
[
	{
		"date": "2000-01-04",
		"open": "1005.53",
		"close": "1063.08",
		"high": "1072.28",
		"low": "998.18",
		"volume": "447663",
		"amount": "1123934000.00",
		"swing": "7.37"
	},
	{
		"date": "2000-01-05",
		"open": "1070.21",
		"close": "1058.50",
		"high": "1107.01",
		"low": "1046.44",
		"volume": "631503",
		"amount": "1497218000.00",
		"swing": "5.70"
    }
    ...
]
```
返回参数说明  
     <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>date</td><td>交易日期</td></tr>
            <tr><td>open</td><td>开盘价</td></tr>
            <tr><td>close</td><td>收盘价</td></tr>
            <tr><td>high</td><td>最高价</td></tr>
            <tr><td>low</td><td>最低价</td></tr>
            <tr><td>volume</td><td>成交量</td></tr>
            <tr><td>amount</td><td>成交额</td></tr>
            <tr><td>swing</td><td>振幅</td></tr>
        </tbody>
    </table>

## 指数周线数据

- 接口用途  
    获取指数周线历史数据
- 接口调用说明  
``` javascript
dip.stock.index.getWeekHis("BK0447").then(data=>{
    //数据存储、处理逻辑，请自行实现
})
```
- 参数说明  
    同日线
- 返回说明 正常时的返回JSON数据包示例：  
    同日线

## 指数月线数据

- 接口用途  
    获取指数月线历史数据
- 接口调用说明  
``` javascript
dip.stock.index.getMonthHis("BK0447").then(data=>{
    //数据存储、处理逻辑，请自行实现
})
``` 
- 参数说明  
    同日线
- 返回说明 正常时的返回JSON数据包示例：  
    同日线

## 指数成分

- 接口用途
    获取指数成份股列表
- 接口调用说明
``` javascript
dip.stock.index.getComponents("BK0447").then(data=>{
    //数据存储、处理逻辑，请自行实现
})
``` 
- 参数说明
    同日线
- 返回说明 正常时的返回JSON数据包示例： 
``` json
[
	{
		"code": "300785",
		"name": "值得买"
	},
	{
		"code": "600870",
		"name": "ST厦华"
	},
	{
		"code": "002769",
		"name": "普路通"
    }
    ...
]
```
返回参数说明  
     <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码</td></tr>
            <tr><td>name</td><td>股票名称</td></tr>
        </tbody>
    </table>