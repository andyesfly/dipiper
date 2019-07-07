## 获取股票列表
- 接口用途  
    获取沪深A股列表,由于返回的是所有股票，整理数据的时间较长，建议调用后自行存储，方便其他接口需要股票代码作为参数时使用。
- 接口调用说明
    ``` javascript
    dip.symbols.getStockList().then((data)=>{
        //数据存储、处理逻辑，请自行实现
    })
    ```
- 参数说明  
    没有输入参数
- 返回说明 正常时的返回JSON数据包示例：
    ``` json
    [
        {
		"symbol": "sh600000",
		"code": "600000",
		"name": "浦发银行"
        },
        {
            "symbol": "sh600004",
            "code": "600004",
            "name": "白云机场"
        },
        ...
	]
    ```
    返回参数说明  
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>symbol</td><td>带市场标识的股票代码,其他数据接口中可能会用到</td></tr>
            <tr><td>code</td><td>不带市场标识的补票代码</td></tr>
            <tr><td>name</td><td>股票名称</td></tr>
        </tbody>
    </table>
