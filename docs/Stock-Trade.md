## 日线历史数据  
- 接口用途  
    获取个股日线历史数据，从上市之日开始至最近收市日的所有日K线数据,按年份获取。
- 接口调用说明
    ``` javascript
    dip.stock.trading.getDailyHis("17","sh600005").then((data)=>{
        //数据存储、处理逻辑，请自行实现
    });
    ```
- 参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>year</td><td>数据年份</td></tr>
            <tr><td>code</td><td>股票代码（带市场标识）</td></tr>
        </tbody>
    </table>

- 返回说明 正常时的返回JSON数据包示例：
    ``` json
    [
        {
            "date": "1999-08-31",
            "open": "4.89",
            "close": "5.53",
            "high": "5.88",
            "low": "4.80",
            "volume": "3500394"
        },
        {
            "date": "1999-09-30",
            "open": "5.57",
            "close": "5.52",
            "high": "6.01",
            "low": "5.35",
            "volume": "985534"
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
        </tbody>
    </table>

## 周线历史数据
- 接口用途  
    获取个股周线历史数据
- 接口调用说明
    ``` javascript
    dip.stock.trading.getWeekHis("sh600005").then((data)=>{
        //数据存储、处理逻辑，请自行实现
    });
    ```
- 参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（带市场标识）</td></tr>
        </tbody>
    </table>



- 返回说明 正常时的返回JSON数据包示例：  
    同日线返回数据

## 月线历史数据
- 接口用途  
    获取个股月线历史数据
- 接口调用说明
    ``` javascript
    dip.stock.trading.getMonthHis("sh600005").then((data)=>{
        //数据存储、处理逻辑，请自行实现
    });
    ```
- 参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（带市场标识）</td></tr>
        </tbody>
    </table>


- 返回说明 正常时的返回JSON数据包示例：  
    同日线返回数据

## 分时数据
    仅限单日分时数据，每分钟刷新一次，收盘后可获取当日所有分时数据
- 接口用途  
    获取个股当日分时数据
- 接口调用说明
    ``` javascript
    dip.stock.trading.getMin("sh600005").then((data)=>{
        //数据存储、处理逻辑，请自行实现
    });
    ```
- 参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（带市场标识）</td></tr>
        </tbody>
    </table>


- 返回说明 正常时的返回JSON数据包示例：  
    ``` json
    [
        {
            "date": "201907050930",
            "price": "6.71",
            "volume": "17544"
        },
        {
            "date": "201907050931",
            "price": "6.75",
            "volume": "24191"
        }
    ]
    ```
    返回参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>date</td><td>交易时间</td></tr>
            <tr><td>price</td><td>分时价格（分钟线收盘价）</td></tr>
            <tr><td>volume</td><td>分时成交量</td></tr>
        </tbody>
    </table>

## 获取指数历史数据  
调用方法同日线、周线、月线历史数据
- 参数说明
<table>
    <thead><tr><th>参数</th><th>说明</th></tr></thead>
    <tbody>
        <tr><td>code</td><td>指数代码（上证指数：sh000001，沪深300：sh000300，深圳成指：sz399001，中小板指：sz399005，创业板指：sz399006）</td></tr>
    </tbody>
</table>