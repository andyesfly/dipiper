## 获取股票列表

- 接口用途  
    获取沪深A股列表,由于返回的是所有股票，整理数据的时间较长，建议调用后自行存储，方便其他接口需要股票代码作为参数时使用。
- 接口调用说明

    ``` javascript
    dip.stock.symbols.getStockList().then((data)=>{
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

## 股票发行信息

- 接口用途  
    获取股票的上市发行信息
- 调用说明  

    ``` javascript
    dip.stock.symbols.getStockIssue("000725").then((data)=>{
        //数据存储、处理逻辑，请自行实现
    })
    ```

- 参数说明
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（不带市场标识）</td></tr>
        </tbody>
    </table>
- 返回说明 正常时的返回JSON数据包示例：

    ``` json
    [
        {
            "market": "深圳证券交易所",
            "consignee": "南方证券股份有限公司",
            "underwriting": "余额包销",
            "sponsor": "南方证券有限公司",
            "issue_price": "16.80",
            "issue_mode": "网下询价配售、网上定价发行",
            "issue_p/e": "--",
            "pre_capital": "48,955.40",
            "capital": "54,955.40",
            "issue_volume": "6,000.00",
            "expected_fundraising": "100,800.00",
            "fundraising": "100,800.00",
            "issue_cost": "3,310.00",
            "net_amount_raised": "97,490.00",
            "underwriting_fee": "--",
            "announcement_date": "2000-12-11",
            "launch_date": "2001-01-12"
        }
    ]
    ```

    返回参数说明  

     <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>market</td><td>上市地</td></tr>
            <tr><td>consignee</td><td>主承销商</td></tr>
            <tr><td>underwriting</td><td>承销方式</td></tr>
            <tr><td>sponsor</td><td>上市推荐人</td></tr>
            <tr><td>issue_price</td><td>每股发行价(元)</td></tr>
            <tr><td>issue_mode</td><td>发行方式</td></tr>
            <tr><td>issue_p/e</td><td>发行市盈率（按发行后总股本）</td></tr>
            <tr><td>pre_capital</td><td>首发前总股本（万股）</td></tr>
            <tr><td>capital</td><td>首发后总股本（万股）</td></tr>
            <tr><td>issue_volume</td><td>实际发行量（万股）</td></tr>
            <tr><td>expected_fundraising</td><td>预计募集资金（万元）</td></tr>
            <tr><td>fundraising</td><td>最实际募集资金合计（万元）</td></tr>
            <tr><td>issue_cost</td><td>发行费用总额（万元）</td></tr>
            <tr><td>net_amount_raised</td><td>募集资金净额（万元）</td></tr>
            <tr><td>underwriting_fee</td><td>承销费用（万元）</td></tr>
            <tr><td>announcement_date</td><td>招股公告日</td></tr>
            <tr><td>launch_date</td><td>上市日期</td></tr>
        </tbody>
    </table>