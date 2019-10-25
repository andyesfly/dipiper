## 财务指标
- 接口用途  
    获取个股财务指标，包括每股指标、盈利能力、成长能力、营运能力、偿债及资本结构、现金流量
- 接口调用说明
    ``` javascript
        dip.stock.finance.getGuideLine("000651","2018").then(data=>{
            //数据存储、处理逻辑，请自行实现
        })
    ```

- 参数说明
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（不带市场标识）</td></tr>
            <tr><td>year</td><td>年份</td></tr>
        </tbody>
    </table>
- 返回说明

    ``` json
    {
        "share_index": [
            {
                "Date": "2018-12-31",
                "Diluted_EPS": "4.385",
                "EPSWA": "4.36",
                "AEPS": "4.36",
                "EPS_NGOL": "4.25",
                "BPS": "15.412",
                "BPS_Adjusted": "15.1814",
                "OCFPS": "4.4784",
                "CRPS": "0.0155",
                "UDPPS": "13.6209"
            }
        ],
        "profitability": [
            {
                "Date": "2018-12-31",
                "OROA": "10.4998",
                "OPE": "29.349",
                "PROA": "11.3166",
                "ROPTC": "19.2697",
                "OPR": "15.6453",
                "COGSTS": "69.7718",
                "PMOS": "13.3145",
                "DOE": "641.6138",
                "ROC": "41.6307",
                "ROA": "15.3633",
                "SGPR": "30.2282",
                "POTE": "11.2643",
                "NMP": "1.2259",
                "POMP": "185.9309",
                "RR": "0",
                "ROI": "--",
                "GP": "58147116642.14",
                "ROE": "28.69",
                "ROEWA": "33.36",
                "NPAD": "25580865501.38"
            }
        ],
        "growth_ability": [
            {
                "Date": "2018-12-31",
                "MBRG": "33.6084",
                "NPGR": "17.1953",
                "GRNA": "38.7222",
                "GRTA": "16.8705"
            }
        ],
        "operation_ability": [
            {
                "Date": "2018-12-31",
                "ART": "29.3208",
                "DSO": "12.278",
                "DSI": "47.6323",
                "RST": "7.5579",
                "TFA": "11.0424",
                "TATO": "0.8499",
                "TATD": "423.5792",
                "CATA": "1.0673",
                "DCAT": "337.2997"
            }
        ],
        "debt_decapital_structure": [
            {
                "Date": "2018-12-31",
                "AR": "1.2665",
                "QR": "1.1396",
                "CR": "71.7115",
                "ICR": "-3198.1925",
                "LDWCR": "0",
                "EAR": "36.9037",
                "LDR": "0",
                "REFA": "504.0825",
                "DER": "170.9755",
                "RLALF": "55.5718",
                "MCR": "0",
                "FANWR": "60.0845",
                "CIR": "55.5718",
                "ER": "170.0767",
                "LVR": "156.0249",
                "POFA": "7.321",
                "LEV": "63.0963",
                "ASSET": "251234157276.81"
            }
        ],
        "cash_flow": [
            {
                "Date": "2018-12-31",
                "NOCFTSR": "0.136",
                "ROOCFOA": "0.1072",
                "NOCFTNP": "1.0213",
                "NOCFTDR": "0.17",
                "CFR": "17.0851"
            }
        ]
    }
    ```

    返回参数说明
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr style="font-weight: bold;"><td>share_index</td><td>每股指标</td></tr>
            <tr><td>Diluted_EPS</td><td>摊薄每股收益</td></tr>
            <tr><td>EPSWA</td><td>加权每股收益</td></tr>
            <tr><td>AEPS</td><td>每股收益_调整后</td></tr>
            <tr><td>EPS_NGOL</td><td>扣除非经常性损益后的每股收益</td></tr>
            <tr><td>BPS</td><td>每股净资产_调整前</td></tr>
            <tr><td>BPS_Adjusted</td><td>每股净资产_调整后</td></tr>
            <tr><td>OCFPS</td><td>每股经营性现金流</td></tr>
            <tr><td>CRPS</td><td>每股资本公积金</td></tr>
            <tr><td>OCFPS</td><td>每股经营性现金流</td></tr>
            <tr><td>UDPPS</td><td>每股未分配利润</td></tr>
            <tr style="font-weight: bold;"><td>profitability</td><td>盈利能力</td></tr>
            <tr><td>OROA</td><td>总资产利润率</td></tr>
            <tr><td>OPE</td><td>主营业务利润率</td></tr>
            <tr><td>PROA</td><td>总资产净利润率</td></tr>
            <tr><td>ROPTC</td><td>成本费用利润率</td></tr>
            <tr><td>OPR</td><td>营业利润率</td></tr>
            <tr><td>COGSTS</td><td>主营业务成本率</td></tr>
            <tr><td>PMOS</td><td>销售净利率</td></tr>
            <tr><td>DOE</td><td>股本报酬率</td></tr>
            <tr><td>ROC</td><td>净资产报酬率</td></tr>
            <tr><td>ROA</td><td>资产报酬率</td></tr>
            <tr><td>SGPR</td><td>销售毛利率</td></tr>
            <tr><td>POTE</td><td>三项费用比重</td></tr>
            <tr><td>NMP</td><td>非主营比重</td></tr>
            <tr><td>POMP</td><td>主营利润比重</td></tr>
            <tr><td>RR</td><td>股息发放率</td></tr>
            <tr><td>ROI</td><td>投资收益率</td></tr>
            <tr><td>GP</td><td>主营业务利润(元)</td></tr>
            <tr><td>ROE</td><td>净资产收益率</td></tr>
            <tr><td>ROEWA</td><td>加权净资产收益率</td></tr>
            <tr><td>NPAD</td><td>扣除非经常性损益后的净利润</td></tr>
            <tr style="font-weight: bold;"><td>growth_ability</td><td>成长能力</td></tr>
            <tr><td>MBRG</td><td>主营业务收入增长率</td></tr>
            <tr><td>NPGR</td><td>净利润增长率</td></tr>
            <tr><td>GRNA</td><td>净资产增长率</td></tr>
            <tr><td>GRTA</td><td>总资产增长率</td></tr>
            <tr style="font-weight: bold;"><td>operation_ability</td><td>营运能力</td></tr>
            <tr><td>ART</td><td>应收账款周转率(次)</td></tr>
            <tr><td>DSO</td><td>应收账款周转天数</td></tr>
            <tr><td>DSI</td><td>存货周转天数</td></tr>
            <tr><td>RST</td><td>存货周转率(次)</td></tr>
            <tr><td>TFA</td><td>固定资产周转率(次)</td></tr>
            <tr><td>TATO</td><td>总资产周转率(次)</td></tr>
            <tr><td>TATD</td><td>总资产周转天数(天)</td></tr>
            <tr><td>CATA</td><td>流动资产周转率(次)</td></tr>
            <tr><td>DCAT</td><td>流动资产周转天数(天)</td></tr>
            <tr style="font-weight: bold;"><td>debt_decapital_structure</td><td>偿债及资本结构</td></tr>
            <tr><td>AR</td><td>流动比率</td></tr>
            <tr><td>QR</td><td>速动比率</td></tr>
            <tr><td>CR</td><td>现金比率(%)</td></tr>
            <tr><td>ICR</td><td>利息支付倍数</td></tr>
            <tr><td>LDWCR</td><td>长期债务与营运资金比率(%)</td></tr>
            <tr><td>EAR</td><td>股东权益比率(%)</td></tr>
            <tr><td>LDR</td><td>长期负债比率(%)</td></tr>
            <tr><td>REFA</td><td>股东权益与固定资产比率(%)</td></tr>
            <tr><td>DER</td><td>负债与所有者权益比率(%)</td></tr>
            <tr><td>RLALF</td><td>长期资产与长期资金比率(%)</td></tr>
            <tr><td>MCR</td><td>资本化比率(%)</td></tr>
            <tr><td>FANWR</td><td>固定资产净值率(%)</td></tr>
            <tr><td>CIR</td><td>资本固定化比率(%)</td></tr>
            <tr><td>ER</td><td>产权比率(%)</td></tr>
            <tr><td>LVR</td><td>清算价值比率(%)</td></tr>
            <tr><td>POFA</td><td>固定资产比重(%)</td></tr>
            <tr><td>LEV</td><td>资产负债率(%)</td></tr>
            <tr><td>ASSET</td><td>总资产(元)</td></tr>
            <tr style="font-weight: bold;"><td>cash_flow</td><td>现金流量</td></tr>
            <tr><td>NOCFTSR</td><td>经营现金净流量对销售收入比率(%)</td></tr>
            <tr><td>ROOCFOA</td><td>资产的经营现金流量回报率(%)</td></tr>
            <tr><td>NOCFTNP</td><td>经营现金净流量与净利润的比率(%)</td></tr>
            <tr><td>NOCFTDR</td><td>经营现金净流量对负债比率(%)</td></tr>
            <tr><td>CFR</td><td>现金流量比率(%)</td></tr>
        </tbody>
    </table>

## 资产负债表
- 接口用途  
    获取个股资产负债表，根据行业划分，包括4类返回结果：银行、保险、证券、普通工商业
- 接口调用说明
    ``` javascript
        dip.stock.finance.getBalanceSheet("000651","2018","bank").then(data=>{
            //数据存储、处理逻辑，请自行实现
        })
    ```
- 参数说明
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（不带市场标识）</td></tr>
            <tr><td>year</td><td>年份</td></tr>
            <tr><td>company_type</td><td>公司类型（bank:银行，insurance:保险，security:证券，general）</td></tr>
        </tbody>
    </table>
- 返回说明
    返回数据依旧是JSON格式，由于数据字段较多，这里不在给出返回数据实例，字段说明参考如下返回参数说明。
    
    返回参数说明
    - 银行
        <table>
            <thead><tr><th>参数</th><th>说明</th></tr></thead>
            <tbody>
                <tr><td>date</td><td>日期</td></tr>
                <tr style="font-weight: bold;"><td>asset</td><td>资产</td></tr>
                <tr><td>cash_deposit</td><td>现金及存放中央银行款项</td></tr>
                <tr><td>bank_deposit</td><td>存放同业款项</td></tr>
                <tr><td>lending_funds</td><td>拆出资金</td></tr>
                <tr><td>noble_metal</td><td>贵金属</td></tr>
                <tr><td>tfa</td><td>交易性金融资产</td></tr>
                <tr><td>dfia</td><td>衍生金融工具资产</td></tr>
                <tr><td>brfa</td><td>买入返售金融资产</td></tr>
                <tr><td>interest_receivable</td><td>应收利息</td></tr>
                <tr><td>loans_and_advances</td><td>发放贷款及垫款</td></tr>
                <tr><td>agency_business_assets</td><td>代理业务资产</td></tr>
                <tr><td>sellable_financial_assets</td><td>可供出售金融资产</td></tr>
                <tr><td>held-to-maturity_investment</td><td>持有至到期投资</td></tr>
                <tr><td>long-term_equity_investment</td><td>长期股权投资</td></tr>
                <tr><td>investment_receivables</td><td>应收投资款项</td></tr>
                <tr><td>total_fixed_assets</td><td>固定资产合计</td></tr>
                <tr><td>intangible_assets</td><td>无形资产</td></tr>
                <tr><td>goodwill</td><td>商誉</td></tr>
                <tr><td>deferred_tax_assets</td><td>递延税款借项</td></tr>
                <tr><td>investment_real_estate</td><td>投资性房地产</td></tr>
                <tr><td>other_assets</td><td>其他资产</td></tr>
                <tr><td>total_assets</td><td>资产总计</td></tr>
                <tr style="font-weight: bold;"><td>debts</td><td>负债</td></tr>
                <tr><td>loan_from_central_bank</td><td>向中央银行借款</td></tr>
                <tr><td>interbank_deposit_withdrawal</td><td>同业存入及拆入</td></tr>
                <tr><td>interbank_deposits</td><td>其中:同业存放款项</td></tr>
                <tr><td>fund_withdrawal</td><td>拆入资金</td></tr>
                <tr><td>derivative_liabilities</td><td>衍生金融工具负债</td></tr>
                <tr><td>trading_financial_liabilities</td><td>交易性金融负债</td></tr>
                <tr><td>sell_buy_financial_assets</td><td>卖出回购金融资产款</td></tr>
                <tr><td>customer_deposit</td><td>客户存款(吸收存款)</td></tr>
                <tr><td>payable_remuneration</td><td>应付职工薪酬</td></tr>
                <tr><td>taxes_payable</td><td>应交税费</td></tr>
                <tr><td>interest_payable</td><td>应付利息</td></tr>
                <tr><td>accounts_payable</td><td>应付账款</td></tr>
                <tr><td>agency_liabilities</td><td>代理业务负债</td></tr>
                <tr><td>bonds_payable</td><td>应付债券</td></tr>
                <tr><td>deferred_tax_liability</td><td>递延所得税负债</td></tr>
                <tr><td>projected_liabilities</td><td>预计负债</td></tr>
                <tr><td>other_liabilities</td><td>其他负债</td></tr>
                <tr><td>total_liabilities</td><td>负债合计</td></tr>
                <tr style="font-weight: bold;"><td>equity</td><td>所有者权益</td></tr>
                <tr><td>share_capital</td><td>股本</td></tr>
                <tr><td>capital_accumulation_fund</td><td>资本公积金</td></tr>
                <tr><td>other_comprehensive_income</td><td>其他综合收益</td></tr>
                <tr><td>surplus_reserve_fund</td><td>盈余公积金金</td></tr>
                <tr><td>undistributed_profit</td><td>未分配利润</td></tr>
                <tr><td>general_risk_preparation</td><td>一般风险准备</td></tr>
                <tr><td>translation_reserve</td><td>外币报表折算差额</td></tr>
                <tr><td>total_sea_to_parent_company</td><td>归属于母公司的股东权益合计</td></tr>
                <tr><td>minority_equity</td><td>少数股东权益</td></tr>
                <tr><td>total_equity</td><td>所有者权益合计</td></tr>
                <tr><td>total_liabilities_and_equity</td><td>负债及股东权益总计</td></tr>
            </tbody>
        </table>
    - 保险
        <table>
            <thead><tr><th>参数</th><th>说明</th></tr></thead>
            <tbody>
                <tr><td>date</td><td>日期</td></tr>
                <tr style="font-weight: bold;"><td>asset</td><td>资产</td></tr>
                <tr><td>money_funds</td><td>货币资金</td></tr>
                <tr><td>withdrawal_of_funds</td><td>拆出资金</td></tr>
                <tr><td>trading_financial_assets</td><td>交易性金融资产</td></tr>
                <tr><td>derivative_financial_assets</td><td>衍生金融资产</td></tr>
                <tr><td>buy_resale_financial_assets</td><td>买入返售金融资产</td></tr>
                <tr><td>premium_receivable</td><td>应收保费</td></tr>
                <tr><td>interest_receivable</td><td>应收利息</td></tr>
                <tr><td>receivables</td><td>应收分保账款</td></tr>
                <tr><td>responsible_undue_reserve</td><td>应收分保未到期责任准备金</td></tr>
                <tr><td>receivables_unpaid_reserve</td><td>应收分保未决赔款准备金</td></tr>
                <tr><td>responsible_life_reserve</td><td>应收分保寿险责任准备金</td></tr>
                <tr><td>responsible_long-term_reserve</td><td>应收分保长期健康险责任准备金</td></tr>
                <tr><td>policyholder_pledge_loan</td><td>保户质押贷款</td></tr>
                <tr><td>for_sale_financial_assets</td><td>可供出售金融资产</td></tr>
                <tr><td>held_to_maturity_investments</td><td>持有至到期投资</td></tr>
                <tr><td>long-term_equity_investment</td><td>长期股权投资</td></tr>
                <tr><td>deposit_capital_guarantee</td><td>存出资本保证金</td></tr>
                <tr><td>receivables_investment</td><td>应收款项类投资</td></tr>
                <tr><td>fixed_assets</td><td>固定资产</td></tr>
                <tr><td>intangible_assets</td><td>无形资产</td></tr>
                <tr><td>goodwill</td><td>商誉</td></tr>
                <tr><td>separate_account_assets</td><td>独立账户资产</td></tr>
                <tr><td>deferred_tax_assets</td><td>递延所得税资产</td></tr>
                <tr><td>investment_real_estate</td><td>投资性房地产</td></tr>
                <tr><td>time_deposit</td><td>定期存款</td></tr>
                <tr><td>other_assets</td><td>其他资产</td></tr>
                <tr><td>total_assets</td><td>资产总计</td></tr>
                <tr style="font-weight: bold;"><td>debts</td><td>负债</td></tr>
                <tr><td>short-term_loan</td><td>短期借款</td></tr>
                <tr><td>unpacking_funds</td><td>拆入资金</td></tr>
                <tr><td>trading_fin_liabilities</td><td>交易性金融负债</td></tr>
                <tr><td>derivative_fin_liabilities</td><td>衍生金融负债</td></tr>
                <tr><td>sell_buy_fin_assets</td><td>卖出回购金融资产款	</td></tr>
                <tr><td>advance_receipt</td><td>预收账款</td></tr>
                <tr><td>advance_payment</td><td>预收保费</td></tr>
                <tr><td>fees_and_commissions</td><td>应付手续费及佣金</td></tr>
                <tr><td>coping_with_reinsurance</td><td>应付分保账款</td></tr>
                <tr><td>payroll_payable</td><td>应付职工薪酬</td></tr>
                <tr><td>taxes_payable</td><td>应交税费</td></tr>
                <tr><td>interest_payable</td><td>应付利息</td></tr>
                <tr><td>payables</td><td>应付赔付款</td></tr>
                <tr><td>payable_policy_dividend</td><td>应付保单红利</td></tr>
                <tr><td>deposits_and_investment_funds</td><td>保户储金及投资款</td></tr>
                <tr><td>unexpired_liability_reserve</td><td>未到期责任准备金</td></tr>
                <tr><td>pending_claims_reserve</td><td>未决赔款准备金</td></tr>
                <tr><td>life_insurance_reserve</td><td>寿险责任准备金</td></tr>
                <tr><td>long-term_health_reserve</td><td>长期健康险责任准备金</td></tr>
                <tr><td>long_term_loan</td><td>长期借款</td></tr>
                <tr><td>bonds_payable</td><td>应付债券</td></tr>
                <tr><td>separate_account_liability</td><td>独立账户负债</td></tr>
                <tr><td>deferred_tax_liabilities</td><td>递延所得税负债</td></tr>
                <tr><td>estimated_liabilities</td><td>预计负债</td></tr>
                <tr><td>other_liabilities</td><td>其他负债</td></tr>
                <tr><td>total_liabilities</td><td>负债合计</td></tr>
                <tr style="font-weight: bold;"><td>equity</td><td>所有者权益</td></tr>
                <tr><td>share_capital</td><td>股本</td></tr>
                <tr><td>capital_accumulation_fund</td><td>资本公积金</td></tr>
                <tr><td>other_comprehensive_income</td><td>其他综合收益</td></tr>
                <tr><td>surplus_reserve_fund</td><td>盈余公积金金</td></tr>
                <tr><td>undistributed_profit</td><td>未分配利润</td></tr>
                <tr><td>general_risk_preparation</td><td>一般风险准备</td></tr>
                <tr><td>foreign_currency_trading_diff</td><td>外币报表折算差额</td></tr>
                <tr><td>total_sea_to_parent_company</td><td>归属于母公司的股东权益合计</td></tr>
                <tr><td>minority_shareholders_equity</td><td>少数股东权益</td></tr>
                <tr><td>total_equity</td><td>所有者权益合计</td></tr>
                <tr><td>total_liabilities_and_equity</td><td>负债及股东权益总计</td></tr>
            </tbody>
        </table>
    - 证券
        <table>
            <thead><tr><th>参数</th><th>说明</th></tr></thead>
            <tbody>
                <tr><td>date</td><td>日期</td></tr>
                <tr style="font-weight: bold;"><td>asset</td><td>资产</td></tr>
                <tr><td>money_funds</td><td>货币资金</td></tr>
                <tr><td>customer_deposit</td><td>客户资金存款</td></tr>
                <tr><td>settlement_provisions</td><td>结算备付金</td></tr>
                <tr><td>customer_reserve_funds</td><td>客户备付金</td></tr>
                <tr><td>financing_funds</td><td>融出资金</td></tr>
                <tr><td>transactional_financial_assets</td><td>交易性金融资产</td></tr>
                <tr><td>derivative_financial_assets</td><td>衍生金融资产</td></tr>
                <tr><td>buy_resale_fin_assets</td><td>买入返售金融资产</td></tr>
                <tr><td>accounts_receivable</td><td>应收账款</td></tr>
                <tr><td>interest_receivable</td><td>应收利息</td></tr>
                <tr><td>refundable_deposits</td><td>存出保证金</td></tr>
                <tr><td>available_for_sale_fin_assets</td><td>可供出售金融资产</td></tr>
                <tr><td>held_to_maturity_investments</td><td>持有至到期投资</td></tr>
                <tr><td>long-term_equity_investment</td><td>长期股权投资</td></tr>
                <tr><td>fixed_assets</td><td>固定资产</td></tr>
                <tr><td>intangible_assets</td><td>无形资产</td></tr>
                <tr><td>trading_seat_fee</td><td>交易席位费</td></tr>
                <tr><td>goodwill</td><td>商誉</td></tr>
                <tr><td>deferred_tax_assets</td><td>递延所得税资产</td></tr>
                <tr><td>investment_real_estate</td><td>投资性房地产</td></tr>
                <tr><td>other_assets</td><td>投资性房地产</td></tr>
                <tr><td>total_assets</td><td>资产总计</td></tr>
                <tr style="font-weight: bold;"><td>debts</td><td>负债</td></tr>
                <tr><td>short-term_loan</td><td>短期借款</td></tr>
                <tr><td>pledge_loan</td><td>质押借款</td></tr>
                <tr><td>coping_with_short-term_financing</td><td>应付短期融资款</td></tr>
                <tr><td>unpacking_funds</td><td>拆入资金</td></tr>
                <tr><td>trading_fin_liabilities</td><td>交易性金融负债</td></tr>
                <tr><td>derivative_fin_liabilities</td><td>衍生金融负债</td></tr>
                <tr><td>sell_repo_fin_assets</td><td>卖出回购金融资产款</td></tr>
                <tr><td>agent_trading_securities</td><td>代理买卖证券款</td></tr>
                <tr><td>agent_underwriting_securities</td><td>代理承销证券款</td></tr>
                <tr><td>payroll_payable</td><td>应付职工薪酬</td></tr>
                <tr><td>taxes_payable</td><td>应交税费</td></tr>
                <tr><td>accounts_payable</td><td>应付账款</td></tr>
                <tr><td>interest_payable</td><td>应付利息</td></tr>
                <tr><td>long_term_loan</td><td>长期借款</td></tr>
                <tr><td>bond_payable</td><td>应付债券款</td></tr>
                <tr><td>deferred_tax_liabilities</td><td>递延所得税负债</td></tr>
                <tr><td>estimated_liabilities</td><td>预计负债</td></tr>
                <tr><td>other_liabilities</td><td>其他负债</td></tr>
                <tr><td>total_liabilities</td><td>负债合计</td></tr>
                <tr style="font-weight: bold;"><td>equity</td><td>所有者权益</td></tr>
                <tr><td>share_capital</td><td>股本</td></tr>
                <tr><td>other_equity_instruments</td><td>其他权益工具</td></tr>
                <tr><td>capital_accumulation_fund</td><td>资本公积金</td></tr>
                <tr><td>treasury_shares</td><td>库存股</td></tr>
                <tr><td>other_comprehensive_income</td><td>其他综合收益</td></tr>
                <tr><td>surplus_reserve_fund</td><td>盈余公积金金</td></tr>
                <tr><td>undistributed_profit</td><td>未分配利润</td></tr>
                <tr><td>general_risk_preparation</td><td>一般风险准备</td></tr>
                <tr><td>trading_risk_preparation</td><td>交易风险准备</td></tr>
                <tr><td>translation_reserve</td><td>外币报表折算差额</td></tr>
                <tr><td>total_sea_to_parent_company</td><td>归属于母公司所有者权益合计</td></tr>
                <tr><td>minority_shareholders'_equity</td><td>少数股东权益</td></tr>
                <tr><td>total_equity</td><td>所有者权益合计</td></tr>
                <tr><td>total_liabilities_and_equity</td><td>负债及股东权益总计</td></tr>
            </tbody>
        </table>
    - 普通工商业
        <table>
            <thead><tr><th>参数</th><th>说明</th></tr></thead>
            <tbody>
                <tr><td>date</td><td>日期</td></tr>
                <tr style="font-weight: bold;"><td>current_assets</td><td>流动资产</td></tr>
                <tr><td>monetary_capital</td><td>货币资金</td></tr>
                <tr><td>trading_fin_assets</td><td>交易性金融资产</td></tr>
                <tr><td>derivative_fin_assets</td><td>衍生金融资产</td></tr>
                <tr><td>receivables_amount</td><td>应收票据及应收账款</td></tr>
                <tr><td>bill_receivables</td><td>应收票据</td></tr>
                <tr><td>receivables</td><td>应收账款</td></tr>
                <tr><td>prepayment</td><td>预付款项</td></tr>
                <tr><td>interest_receivable</td><td>应收利息</td></tr>
                <tr><td>dividends_receivable</td><td>应收股利</td></tr>
                <tr><td>other_receivables</td><td>其他应收款</td></tr>
                <tr><td>repo_financial_asset</td><td>买入返售金融资产</td></tr>
                <tr><td>inventory</td><td>存货</td></tr>
                <tr><td>assets_held_for_sale</td><td>划分为持有待售的资产</td></tr>
                <tr><td>nc-assets_due_in_1year</td><td>一年内到期的非流动资产</td></tr>
                <tr><td>prepaid_expense</td><td>待摊费用</td></tr>
                <tr><td>unsettled</td><td>待处理流动资产损益</td></tr>
                <tr><td>other_current_assets</td><td>其他流动资产</td></tr>
                <tr><td>current_assets_amount</td><td>流动资产合计</td></tr>
                <tr style="font-weight: bold;"><td>illiquid_assets</td><td>非流动资产</td></tr>
                <tr><td>loans_and_payments</td><td>发放贷款及垫款</td></tr>
                <tr><td>sales_for_fin_asset</td><td>可供出售金融资产</td></tr>
                <tr><td>hold_investment_due</td><td>持有至到期投资</td></tr>
                <tr><td>long_term_receivables</td><td>长期应收款</td></tr>
                <tr><td>long_term_equity_investment</td><td>长期股权投资</td></tr>
                <tr><td>investment_property</td><td>投资性房地产</td></tr>
                <tr><td>net_fixed_assets</td><td>固定资产净额</td></tr>
                <tr><td>construction_in_process</td><td>在建工程</td></tr>
                <tr><td>engineering_material</td><td>工程物资</td></tr>
                <tr><td>liquidation_of_fixed_assets</td><td>固定资产清理</td></tr>
                <tr><td>productive_biological_asset</td><td>生产性生物资产</td></tr>
                <tr><td>non-profit_living_assets</td><td>公益性生物资产</td></tr>
                <tr><td>oil_and_gas_assets</td><td>油气资产</td></tr>
                <tr><td>intangible_assets</td><td>无形资产</td></tr>
                <tr><td>development_expenditure</td><td>开发支出</td></tr>
                <tr><td>goodwill</td><td>商誉</td></tr>
                <tr><td>deferred_assets</td><td>长期待摊费用</td></tr>
                <tr><td>deferred_tax_assets</td><td>递延所得税资产</td></tr>
                <tr><td>other_non-current_assets</td><td>其他非流动资产</td></tr>
                <tr><td>total_non-current_assets</td><td>非流动资产合计</td></tr>
                <tr><td>total_assets</td><td>资产总计</td></tr>
                <tr style="font-weight: bold;"><td>current_liabilities</td><td>流动负债</td></tr>
                <tr><td>short_term_borrowing</td><td>短期借款</td></tr>
                <tr><td>trading_fin_liabilities</td><td>交易性金融负债</td></tr>
                <tr><td>notes_accounts_payable</td><td>应付票据及应付账款</td></tr>
                <tr><td>notes_payable</td><td>应付票据</td></tr>
                <tr><td>accounts_payable</td><td>应付账款</td></tr>
                <tr><td>advance_receipt</td><td>预收款项</td></tr>
                <tr><td>commission_payable</td><td>应付手续费及佣金</td></tr>
                <tr><td>payroll_payable</td><td>应付职工薪酬</td></tr>
                <tr><td>tax_payable</td><td>应交税费</td></tr>
                <tr><td>interest_payable</td><td>应付利息</td></tr>
                <tr><td>dividends_payable</td><td>应付股利</td></tr>
                <tr><td>other_payables</td><td>其他应付款</td></tr>
                <tr><td>accrued_expenses</td><td>预提费用</td></tr>
                <tr><td>deferred_earnings_in_1year</td><td>一年内的递延收益</td></tr>
                <tr><td>short_term_bond</td><td>应付短期债券</td></tr>
                <tr><td>nc-liabilities_due_in_1year</td><td>一年内到期的非流动负债</td></tr>
                <tr><td>other_current_liability</td><td>其他流动负债</td></tr>
                <tr><td>total_current_liability</td><td>流动负债合计</td></tr>
                <tr style="font-weight: bold;"><td>non-current_liability</td><td>非流动负债</td></tr>
                <tr><td>long_term_loan</td><td>长期借款</td></tr>
                <tr><td>bonds_payable</td><td>应付债券</td></tr>
                <tr><td>long_term_payable</td><td>长期应付款</td></tr>
                <tr><td>long_term_payroll_payable</td><td>长期应付职工薪酬</td></tr>
                <tr><td>special_payable</td><td>专项应付款</td></tr>
                <tr><td>estimated_nc_liabilities</td><td>预计非流动负债</td></tr>
                <tr><td>deferred_tax_liabilities</td><td>递延所得税负债</td></tr>
                <tr><td>long_term_deferred_earnings</td><td>长期递延收益</td></tr>
                <tr><td>other_nc_liabilities</td><td>其他非流动负债</td></tr>
                <tr><td>total_nc_liabilities</td><td>非流动负债合计</td></tr>
                <tr><td>total_liability</td><td>负债合计</td></tr>
                <tr style="font-weight: bold;"><td>owner's_equity</td><td>所有者权益</td></tr>
                <tr><td>paid-up_or_share_capital</td><td>实收资本(或股本)</td></tr>
                <tr><td>capital_reserve</td><td>资本公积金</td></tr>
                <tr><td>less:_treasury_shares</td><td>减：库存股</td></tr>
                <tr><td>other_comprehensive_income</td><td>其他综合收益</td></tr>
                <tr><td>special_reserves</td><td>专项储备</td></tr>
                <tr><td>surplus_reserve</td><td>盈余公积</td></tr>
                <tr><td>general_risk_preparation</td><td>一般风险准备</td></tr>
                <tr><td>undistributed_profit</td><td>未分配利润</td></tr>
                <tr><td>total_sea_to_parent_company</td><td>归属于母公司股东权益合计</td></tr>
                <tr><td>minority_shareholders'_equity</td><td>少数股东权益</td></tr>
                <tr><td>total_equity</td><td>所有者权益(或股东权益)合计</td></tr>
                <tr><td>total_liabilities_and_equity</td><td>负债和所有者权益(或股东权益)总计</td></tr>
            </tbody>
        </table>

## 利润表
- 接口用途  
    获取个股利润表，根据行业划分，包括4类返回结果：银行、保险、证券、普通工商业
- 接口调用说明 
    ``` javascript
        dip.stock.finance.getProfitStatment("000651","2018","bank").then(data=>{
            //数据存储、处理逻辑，请自行实现
        })
    ```
- 参数说明 
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（不带市场标识）</td></tr>
            <tr><td>year</td><td>年份</td></tr>
            <tr><td>company_type</td><td>公司类型（bank:银行，insurance:保险，security:证券，general）</td></tr>
        </tbody>
    </table>

- 返回说明  
    返回数据依旧是JSON格式，由于数据字段较多，这里不在给出返回数据实例，字段说明参考如下返回参数说明。

    返回参数说明
- 银行
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>date</td><td>日期</td></tr>
            <tr><td>operating_income</td><td>营业收入</td></tr>
            <tr><td>net_interest_income</td><td>利息净收入</td></tr>
            <tr><td>interest_income</td><td>其中：利息收入</td></tr>
            <tr><td>interest_expense</td><td>减：利息支出</td></tr>
            <tr><td>n_fee_comm_income</td><td>手续费及佣金净收入</td></tr>
            <tr><td>comm_income</td><td>其中:手续费及佣金收入</td></tr>
            <tr><td>comm_expenses</td><td>减：手续费及佣金支出</td></tr>
            <tr><td>exchange_gains</td><td>汇兑收益</td></tr>
            <tr><td>investment_income</td><td>投资净收益</td></tr>
            <tr><td>jv_invest_income</td><td>其中:对联营公司的投资收益</td></tr>
            <tr><td>fair_value_change_income</td><td>公允价值变动净收益</td></tr>
            <tr><td>other_income</td><td>其他业务收入</td></tr>
            <tr><td>operating_expenses</td><td>营业支出</td></tr>
            <tr><td>tax_surcharges</td><td>营业税金及附加</td></tr>
            <tr><td>management_expenses</td><td>业务及管理费用</td></tr>
            <tr><td>asset_loss</td><td>资产减值损失</td></tr>
            <tr><td>other_expenses</td><td>其他业务支出</td></tr>
            <tr><td>operating_profit</td><td>营业利润</td></tr>
            <tr><td>plus_nop_income</td><td>加:营业外收入</td></tr>
            <tr><td>less_nop_expenses</td><td>减:营业外支出</td></tr>
            <tr><td>total_profit</td><td>利润总额</td></tr>
            <tr><td>less_income_tax</td><td>减:所得税</td></tr>
            <tr><td>net_profit</td><td>净利润</td></tr>
            <tr><td>profits_to_pcom</td><td>归属于母公司的净利润</td></tr>
            <tr><td>minority_interest_income</td><td>少数股东权益</td></tr>
            <tr><td>basic_earnings_per_share</td><td>基本每股收益(元/股)</td></tr>
            <tr><td>diluted_earnings_per_share</td><td>稀释每股收益(元/股)</td></tr>
            <tr><td>other_compr_income</td><td>其他综合收益</td></tr>
            <tr><td>t_compr_income</td><td>综合收益总额</td></tr>
            <tr><td>t_compr_income_attr_p</td><td>归属于母公司所有者的综合收益总额</td></tr>
            <tr><td>t_compr_income_attr_ms</td><td>归属于少数股东的综合收益总额</td></tr>
        </tbody>
    </table>

- 保险
    <table>
    <thead><tr><th>参数</th><th>说明</th></tr></thead>
    <tbody>
    <tr><td>date</td><td>日期</td></tr>
    <tr><td>operating_income</td><td>营业收入</td></tr>
    <tr><td>earned_premium</td><td>已赚保费</td></tr>
    <tr><td>prem_income</td><td>保费业务收入</td></tr>
    <tr><td>reins_income</td><td>其中:分保费收入</td></tr>
    <tr><td>out_prem</td><td>减:分出保费</td></tr>
    <tr><td>une_prem_reser</td><td>提取未到期责任准备金</td></tr>
    <tr><td>investment_income</td><td>投资净收益</td></tr>
    <tr><td>jv_invest_loss</td><td>其中:对联营企业和合营企业的投资损失</td></tr>
    <tr><td>fair_value_change_income</td><td>公允价值变动损益</td></tr>
    <tr><td>exchange_gains</td><td>汇兑损益</td></tr>
    <tr><td>other_income</td><td>其他业务收入</td></tr>
    <tr><td>operating_expenses</td><td>营业支出</td></tr>
    <tr><td>withdrawal</td><td>退保金</td></tr>
    <tr><td>payout</td><td>赔付支出</td></tr>
    <tr><td>compens_payout_refu</td><td>减:摊回赔付支出</td></tr>
    <tr><td>reser_insur_liab</td><td>提取保险责任准备金</td></tr>
    <tr><td>insur_reser_refu</td><td>减:摊回保险责任准备金</td></tr>
    <tr><td>div_payt</td><td>保户红利支出</td></tr>
    <tr><td>reinsurance_costs</td><td>分保费用</td></tr>
    <tr><td>tax_surcharges</td><td>营业税金及附加</td></tr>
    <tr><td>comm_expenses</td><td>手续费及佣金支出</td></tr>
    <tr><td>management_costs</td><td>管理费用</td></tr>
    <tr><td>reins_cost_refund</td><td>减:摊回分保费用</td></tr>
    <tr><td>other_expenses</td><td>其他业务成本</td></tr>
    <tr><td>asset_loss</td><td>资产减值损失</td></tr>
    <tr><td>operating_profit</td><td>营业利润</td></tr>
    <tr><td>plus_nop_income</td><td>加:营业外收入</td></tr>
    <tr><td>less_nop_expenses</td><td>减:营业外支出</td></tr>
    <tr><td>total_profit</td><td>利润总额</td></tr>
    <tr><td>less_income_tax</td><td>减:所得税</td></tr>
    <tr><td>net_profit</td><td>净利润</td></tr>
    <tr><td>profits_to_pcom</td><td>归属于母公司的净利润</td></tr>
    <tr><td>minority_interest_income</td><td>少数股东权益</td></tr>
    <tr><td>basic_earnings_per_share</td><td>基本每股收益(元/股)</td></tr>
    <tr><td>diluted_earnings_per_share</td><td>稀释每股收益(元/股)</td></tr>
    <tr><td>other_compr_income</td><td>其他综合收益</td></tr>
    <tr><td>t_compr_income</td><td>综合收益总额</td></tr>
    <tr><td>t_compr_income_attr_p</td><td>归属于母公司所有者的综合收益总额</td></tr>
    <tr><td>t_compr_income_attr_ms</td><td>归属于少数股东的综合收益总额</td></tr>
    </tbody>
    </table>

- 证券
    <table>
    <thead><tr><td>参数</td><td>说明</td></tr></thead>
    <tbody>
    <tr><td>date</td><td>日期</td></tr>
    <tr><td>operating_income</td><td>营业收入</td></tr>
    <tr><td>n_fee_comm_income</td><td>手续费及佣金净收入</td></tr>
    <tr><td>n_sec_tb_income</td><td>代理买卖证券业务净收入</td></tr>
    <tr><td>n_sec_uw_income</td><td>证券承销业务净收入</td></tr>
    <tr><td>n_asset_mg_income</td><td>受托客户资产管理业务净收入</td></tr>
    <tr><td>net_interest_income</td><td>利息净收入</td></tr>
    <tr><td>interest_income</td><td>其中:利息收入</td></tr>
    <tr><td>interest_expense</td><td>利息支出</td></tr>
    <tr><td>investment_income</td><td>投资收益</td></tr>
    <tr><td>jv_invest_income</td><td>其中:对联营企业和合营企业的投资收益</td></tr>
    <tr><td>fair_value_change_income</td><td>公允价值变动损益</td></tr>
    <tr><td>exchange_gains</td><td>汇兑损益</td></tr>
    <tr><td>other_income</td><td>其他业务收入</td></tr>
    <tr><td>operating_expenses</td><td>营业支出</td></tr>
    <tr><td>tax_surcharges</td><td>营业税金及附加</td></tr>
    <tr><td>management_costs</td><td>管理费用</td></tr>
    <tr><td>asset_loss</td><td>资产减值损失</td></tr>
    <tr><td>other_expenses</td><td>其他业务成本</td></tr>
    <tr><td>operating_profit</td><td>营业利润</td></tr>
    <tr><td>plus_nop_income</td><td>加:营业外收入</td></tr>
    <tr><td>less_nop_expenses</td><td>减:营业外支出</td></tr>
    <tr><td>total_profit</td><td>利润总额</td></tr>
    <tr><td>less_income_tax</td><td>减:所得税</td></tr>
    <tr><td>net_profit</td><td>净利润</td></tr>
    <tr><td>profits_to_pcom</td><td>归属于母公司的净利润</td></tr>
    <tr><td>minority_interest_income</td><td>少数股东权益</td></tr>
    <tr><td>earnings_per_share</td><td>每股收益</td></tr>
    <tr><td>basic_earnings_per_share</td><td>基本每股收益(元/股)</td></tr>
    <tr><td>diluted_earnings_per_share</td><td>稀释每股收益(元/股)</td></tr>
    <tr><td>other_compr_income</td><td>其他综合收益</td></tr>
    <tr><td>t_compr_income</td><td>综合收益总额</td></tr>
    <tr><td>t_compr_income_attr_p</td><td>归属于母公司所有者的综合收益总额</td></tr>
    <tr><td>t_compr_income_attr_ms</td><td>归属于少数股东的综合收益总额</td></tr>
    </tbody>
    </table>
    - 普通工商业
    <table>
    <thead><tr><td>参数</td><td>说明</td></tr></thead>
    <tbody>
    <tr><td>date</td><td>日期</td></tr>
    <tr><td>total_income</td><td>营业总收入</td></tr>
    <tr><td>income</td><td>营业收入</td></tr>
    <tr><td>total_costs	</td><td>营业总成本</td></tr>
    <tr><td>costs</td><td>营业成本</td></tr>
    <tr><td>tax_surcharges</td><td>营业税金及附加</td></tr>
    <tr><td>sales_expense</td><td>销售费用</td></tr>
    <tr><td>management_costs</td><td>管理费用</td></tr>
    <tr><td>financial_expenses</td><td>财务费用</td></tr>
    <tr><td>asset_loss</td><td>资产减值损失</td></tr>
    <tr><td>fair_value_change_income</td><td>公允价值变动收益</td></tr>
    <tr><td>investment_income</td><td>投资净收益</td></tr>
    <tr><td>jv_invest_income</td><td>其中:对联营企业和合营企业的投资收益</td></tr>
    <tr><td>exchange_gains</td><td>汇兑收益</td></tr>
    <tr><td>operating_profit</td><td>营业利润</td></tr>
    <tr><td>plus_nop_income</td><td>加:营业外收入</td></tr>
    <tr><td>less_nop_expenses</td><td>减：营业外支出</td></tr>
    <tr><td>nca_disploss</td><td>其中：非流动资产处置损失</td></tr>
    <tr><td>total_profit</td><td>利润总额</td></tr>
    <tr><td>deduct_income_tax</td><td>减：所得税费用</td></tr>
    <tr><td>net_profit</td><td>净利润</td></tr>
    <tr><td>profits_to_pcom</td><td>归属于母公司所有者的净利润</td></tr>
    <tr><td>minority_interest_income</td><td>少数股东损益</td></tr>
    <tr><td>basic_earnings_per_share</td><td>基本每股收益(元/股)</td></tr>
    <tr><td>diluted_earnings_per_share</td><td>稀释每股收益(元/股)</td></tr>
    <tr><td>other_compr_income</td><td>其他综合收益</td></tr>
    <tr><td>t_compr_income</td><td>综合收益总额</td></tr>
    <tr><td>t_compr_income_attr_p</td><td>归属于母公司所有者的综合收益总额</td></tr>
    <tr><td>t_compr_income_attr_ms</td><td>归属于少数股东的综合收益总额</td></tr>
    </tbody>
    </table>

## 现金流量表
- 接口用途  
    获取个股利现金流量表，根据行业划分，包括4类返回结果：银行、保险、证券、普通工商业
- 接口调用说明 
    ``` javascript
        dip.stock.finance.getCashFlowStatment("600030","2019","security").then(data=>{
            //数据存储、处理逻辑，请自行实现
        })
    ```
- 参数说明 
    <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
            <tr><td>code</td><td>股票代码（不带市场标识）</td></tr>
            <tr><td>year</td><td>年份</td></tr>
            <tr><td>company_type</td><td>公司类型（bank:银行，insurance:保险，security:证券，general）</td></tr>
        </tbody>
    </table>

- 返回说明  
    返回数据依旧是JSON格式，由于数据字段较多，这里不在给出返回数据实例，字段说明参考如下返回参数说明。

    返回参数说明
- 银行
    <table>
    <thead><tr><th>参数</th><th>说明</th></tr></thead>
    <tbody>
        <tr><td>date</td><td>日期</td></tr>
        <tr><td>net_incr_deposits</td><td>客户存款和同业存放款项净增加额</td></tr>
        <tr><td>net_incr_borrowing_ctbank</td><td>向央行借款净增加额</td></tr>
        <tr><td>net_incr_borr_oth_fi</td><td>向其他金融机构拆入资金净增加额</td></tr>
        <tr><td>cash_interest_commission</td><td>收取利息、手续费及佣金的现金</td></tr>
        <tr><td>received_other_cash</td><td>收到其他与经营活动有关的现金</td></tr>
        <tr><td>subtotal_cash_in_op</td><td>经营活动现金流入小计</td></tr>
        <tr><td>net_incr_cust_loans</td><td>客户贷款及垫款净增加额</td></tr>
        <tr><td>deposit_net_incr</td><td>存放中央银行和同业款项净增加额</td></tr>
        <tr><td>cash_for_employees</td><td>支付给职工以及为职工支付的现金</td></tr>
        <tr><td>various_taxes_paid</td><td>支付的各项税费</td></tr>
        <tr><td>other_pay</td><td>支付其他与经营活动有关的现金</td></tr>
        <tr><td>pay_interest_commission</td><td>支付利息、手续费及佣金的现金</td></tr>
        <tr><td>subtotal_cash_out</td><td>经营活动现金流出小计</td></tr>
        <tr><td>net_cash_flow</td><td>经营活动产生的现金流量净额</td></tr>
        <tr><td>cash_from_investment</td><td>收回投资收到的现金</td></tr>
        <tr><td>cash_investment_income</td><td>取得投资收益收到的现金</td></tr>
        <tr><td>net_cash_assets</td><td>处置固定资产、无形资产及其他资产而收到的现金</td></tr>
        <tr><td>net_cash_subsidiaries</td><td>取得子公司及其他营业单位所收到的现金净额</td></tr>
        <tr><td>other_cash_investment</td><td>收到其他与投资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_investment</td><td>投资活动现金流入小计</td></tr>
        <tr><td>cash_paid_investment</td><td>投资所支付的现金</td></tr>
        <tr><td>cash_paid_assets</td><td>购建固定资产、无形资产和其他长期资产支付的现金</td></tr>
        <tr><td>other_cash_paid_investment</td><td>支付的其他与投资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out_investment</td><td>投资活动现金流出小计</td></tr>
        <tr><td>net_cash_flows_investing</td><td>投资活动产生的现金流量净额</td></tr>
        <tr><td>cash_received_investment</td><td>吸收投资所收到的现金</td></tr>
        <tr><td>cash_received_securitized</td><td>发行证券化资产所吸收的现金</td></tr>
        <tr><td>cash_received_bonds</td><td>发行债券收到的现金</td></tr>
        <tr><td>cash_received_capital</td><td>增加股本所收到的现金</td></tr>
        <tr><td>cash_received_financing</td><td>收到其他与筹资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_financing</td><td>筹资活动现金流入小计</td></tr>
        <tr><td>cash_paid_debt</td><td>偿还债务所支付的现金</td></tr>
        <tr><td>cash_paid_dpp</td><td>分配股利、利润或偿付利息支付的现金</td></tr>
        <tr><td>cash_paid_interest</td><td>其中:偿付利息所支付的现金</td></tr>
        <tr><td>pay_ns_issuance</td><td>支付新股发行费用</td></tr>
        <tr><td>other_cash_out_financing</td><td>支付其他与筹资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out_financing</td><td>筹资活动现金流出小计</td></tr>
        <tr><td>net_cash_flow_financing</td><td>筹资活动产生的现金流量净额</td></tr>
        <tr><td>exchange_rate_cash</td><td>汇率变动对现金及现金等价物的影响</td></tr>
        <tr><td>net_increase_cash</td><td>现金及现金等价物净增加额</td></tr>
        <tr><td>cash_beginning</td><td>加:期初现金及现金等价物余额</td></tr>
        <tr><td>cash_end</td><td>期末现金及现金等价物余额</td></tr>
        <tr><td>net_profit</td><td>净利润</td></tr>
        <tr><td>ms_equity</td><td>加:少数股东收益</td></tr>
        <tr><td>impairment_of_assets</td><td>计提的资产减值准备</td></tr>
        <tr><td>provision_bad_debts</td><td>其中：计提的坏账准备</td></tr>
        <tr><td>provision_for_loan_loss</td><td>计提的贷款损失准备</td></tr>
        <tr><td>rb_impairment_provision</td><td>冲回存放同业减值准备</td></tr>
        <tr><td>depreciation_of_assets</td><td>固定资产折旧、油气资产折耗、生产性生物资产折旧</td></tr>
        <tr><td>inv_prop_depreciation</td><td>投资性房地产折旧</td></tr>
        <tr><td>amort_intangible_ado</td><td>无形资产、递延资产及其他资产的摊销</td></tr>
        <tr><td>amort_intangible_assets</td><td>其中:无形资产摊销</td></tr>
        <tr><td>lt_deferred_exp_amort</td><td>长期待摊费用摊销</td></tr>
        <tr><td>lt_asset_amortization</td><td>长期资产摊销</td></tr>
        <tr><td>disposal_of_assets</td><td>处置固定资产、无形资产和其他长期产的损失/(收益)</td></tr>
        <tr><td>disposal_of_inv_prop</td><td>处置投资性房地产的损失/(收益)</td></tr>
        <tr><td>fx_asset_loss</td><td>固定资产报废损失</td></tr>
        <tr><td>financial_expenses</td><td>财务费用</td></tr>
        <tr><td>investment_loss</td><td>投资损失(减:收益)</td></tr>
        <tr><td>loss_fair_value</td><td>公允价值变动(收益)/损失</td></tr>
        <tr><td>exchange_gains_losses</td><td>汇兑损益</td></tr>
        <tr><td>net_gains_loss_derivative</td><td>衍生金融工具交易净损益</td></tr>
        <tr><td>discounted_withdrawal</td><td>折现回拔(减值资产利息冲转)</td></tr>
        <tr><td>reduction_in_inventory</td><td>存货的减少</td></tr>
        <tr><td>reduction_in_loans</td><td>贷款的减少</td></tr>
        <tr><td>increase_in_deposits</td><td>存款的增加</td></tr>
        <tr><td>net_increase_in_borrowings</td><td>拆借款项的净增</td></tr>
        <tr><td>reduction_financial_assets</td><td>金融性资产的减少</td></tr>
        <tr><td>estimated_incr_liabilities</td><td>预计负债的增加</td></tr>
        <tr><td>received_writeoffs</td><td>收到已核销款项</td></tr>
        <tr><td>decr_def_inc_tax_assets</td><td>递延所得税资产的减少</td></tr>
        <tr><td>incr_def_inc_tax_liab</td><td>递延所得税负债的增加</td></tr>
        <tr><td>incr_oper_receivables</td><td>经营性应收项目的增加</td></tr>
        <tr><td>incr_oper_payables</td><td>经营性应付项目的增加</td></tr>
        <tr><td>decr_other_assets</td><td>经营性其他资产的减少</td></tr>
        <tr><td>incr_other_liabilities</td><td>经营性其他负债的增加</td></tr>
        <tr><td>other</td><td>其他</td></tr>
        <tr><td>net_cash_flow_op</td><td>经营活动现金流量净额</td></tr>
        <tr><td>repay_debts_with_fa</td><td>以固定资产偿还债务</td></tr>
        <tr><td>repay_debts_with_inv</td><td>以投资偿还债务</td></tr>
        <tr><td>invest_in_fa</td><td>以固定资产进行投资</td></tr>
        <tr><td>conv_debt_into_cap</td><td>债务转为资本</td></tr>
        <tr><td>convertible_bonds_in_1year</td><td>一年内到期的可转换公司债券</td></tr>
        <tr><td>financing_leased_fa</td><td>融资租入固定资产</td></tr>
        <tr><td>other_inv_fr_cash</td><td>其他不涉及现金收支的投资和筹资活动金额</td></tr>
        <tr><td>ending_balance_of_cash</td><td>现金的期末余额</td></tr>
        <tr><td>cash_beginning_balance</td><td>减:现金的期初余额</td></tr>
        <tr><td>ending_cash_eq</td><td>现金等价物的期末余额</td></tr>
        <tr><td>opening_cash_eq</td><td>减：现金等价物的期初余额</td></tr>
        <tr><td>incr_net_cash_eq</td><td>现金及现金等价物净增加额</td></tr>
    </tbody>
    </table>
- 保险
    <table>
    <thead><tr><th>参数</th><th>说明</th></tr></thead>
    <tbody>
        <tr><td>date</td><td>日期</td></tr>
        <tr><td>prem_fr_orig_contr</td><td>收到原保险合同保费取得的现金 </td></tr>
        <tr><td>n_reinsur_prem</td><td>收到再保业务现金净额 </td></tr>
        <tr><td>other_cash_operating</td><td>收到其他与经营活动有关的现金 </td></tr>
        <tr><td>n_incr_insured_dep</td><td>保户储金净增加额 </td></tr>
        <tr><td>subtotal_cash_in_operating</td><td>经营活动现金流入小计 </td></tr>
        <tr><td>c_pay_claims_orig_inco</td><td>支付原保险合同赔付款项的现金 </td></tr>
        <tr><td>cash_for_employees</td><td>支付给职工以及为职工支付的现金 </td></tr>
        <tr><td>pay_handling_chrg</td><td>支付手续费的现金 </td></tr>
        <tr><td>various_taxes_paid</td><td>支付的各项税费 </td></tr>
        <tr><td>other_pay</td><td>支付其他与经营活动有关的现金 </td></tr>
        <tr><td>pay_policy_bonus</td><td>支付保单红利的现金 </td></tr>
        <tr><td>subtotal_cash_out</td><td>经营活动现金流出小计 </td></tr>
        <tr><td>net_cash_flow</td><td>经营活动产生的现金流量净额 </td></tr>
        <tr><td>cash_from_investment</td><td>收回投资收到的现金 </td></tr>
        <tr><td>cash_investment_income</td><td>取得投资收益收到的现金 </td></tr>
        <tr><td>net_cash_assets</td><td>处置固定资产、无形资产和其他长期资产收回的现金净额 </td></tr>
        <tr><td>net_cash_subsidiaries</td><td>处置子公司及其他营业单位收到的现金 </td></tr>
        <tr><td>other_cash_investment</td><td>收到其他与投资活动有关的现金 </td></tr>
        <tr><td>subtotal_cash_investment</td><td>投资活动现金流入小计 </td></tr>
        <tr><td>cash_paid_investment</td><td>投资支付的现金 </td></tr>
        <tr><td>net_incr_loans</td><td>质押贷款净增加额 </td></tr>
        <tr><td>cash_paid_assets</td><td>购建固定资产、无形资产和其他长期资产支付的现金 </td></tr>
        <tr><td>net_cash_paid_subsidiaries</td><td>购买子公司及其他营业单位支付的现金净额 </td></tr>
        <tr><td>other_cash_paid_investment</td><td>支付其他与投资活动有关的现金 </td></tr>
        <tr><td>subtotal_cash_out_investment</td><td>投资活动现金流出小计 </td></tr>
        <tr><td>net_cash_flows_investing</td><td>投资活动产生的现金流量净额 </td></tr>
        <tr><td>cash_received_investment</td><td>吸收投资收到的现金 </td></tr>
        <tr><td>cash_received_loan</td><td>取得借款收到的现金 </td></tr>
        <tr><td>cash_received_bonds</td><td>发行债券收到的现金 </td></tr>
        <tr><td>cash_received_financing</td><td>收到其他与筹资活动有关的现金 </td></tr>
        <tr><td>subtotal_cash_financing</td><td>筹资活动现金流入小计 </td></tr>
        <tr><td>cash_paid_debt</td><td>偿还债务支付的现金 </td></tr>
        <tr><td>cash_paid_dpp</td><td>分配股利、利润或偿付利息所支付的现金 </td></tr>
        <tr><td>other_cash_out_financing</td><td>支付的其他与筹资活动有关的现金 </td></tr>
        <tr><td>subtotal_cash_out_financing</td><td>筹资活动现金流出小计 </td></tr>
        <tr><td>net_cash_flow_financing</td><td>筹资活动产生的现金流量净额 </td></tr>
        <tr><td>exchange_rate_cash</td><td>汇率变动对现金及现金等价物的影响 </td></tr>
        <tr><td>net_increase_cash</td><td>现金及现金等价物净增加额 </td></tr>
        <tr><td>cash_beginning</td><td>加:期初现金及现金等价物余额 </td></tr>
        <tr><td>cash_end</td><td>期末现金及现金等价物余额 </td></tr>
        <tr><td>net_profit</td><td>净利润 </td></tr>
        <tr><td>impairment_of_assets</td><td>加:计提(转回)资产减值准备 </td></tr>
        <tr><td>estimated_liabilities</td><td>计提的预计负债 </td></tr>
        <tr><td>net_liability_reserves</td><td>提取的各项保险责任准备金净额 </td></tr>
        <tr><td>unexpired_liability_reserve</td><td>提取的未到期的责任准备金 </td></tr>
        <tr><td>inv_prop_depreciation</td><td>投资性房地产折旧 </td></tr>
        <tr><td>depreciation_of_assets</td><td>固定资产折旧、油气资产折耗、生产性生物资产折旧 </td></tr>
        <tr><td>amort_ido_assets</td><td>无形资产、递延资产及其他资产摊销 </td></tr>
        <tr><td>amort_intangible_assets</td><td>其中:无形资产摊销 </td></tr>
        <tr><td>lt_deferred_exp_amort</td><td>长期待摊费用摊销 </td></tr>
        <tr><td>lt_assets_exp_amort</td><td>长期资产摊销 </td></tr>
        <tr><td>incr_accrued_exp</td><td>预提费用的增加 </td></tr>
        <tr><td>disposal_of_assets</td><td>处置固定资产、无形资产和其他长期资产的损失(收益) </td></tr>
        <tr><td>disposal_invest_prop</td><td>处置投资性房地产的收益 </td></tr>
        <tr><td>investment_income</td><td>投资收益 </td></tr>
        <tr><td>loss_fair_value</td><td>公允价值变动损失(收益) </td></tr>
        <tr><td>automatic_premium_payment</td><td>自动垫缴保费收入 </td></tr>
        <tr><td>interest_income</td><td>利息收入 </td></tr>
        <tr><td>interest_expense</td><td>利息支出 </td></tr>
        <tr><td>exchange_gains_losses</td><td>汇兑损失(收益) </td></tr>
        <tr><td>incr_deposits_invest</td><td>保户储金及投资款的增加 </td></tr>
        <tr><td>deferred_income_tax</td><td>递延所得税费用 </td></tr>
        <tr><td>decr_def_inc_tax_assets</td><td>其中:递延所得税资产的减少(增加) </td></tr>
        <tr><td>incr_def_inc_tax_liab</td><td>递延所得税负债的减少(增加) </td></tr>
        <tr><td>decr_financial_assets</td><td>金融资产的减少 </td></tr>
        <tr><td>incr_financial_liabilities</td><td>金融负债的增加 </td></tr>
        <tr><td>decr_oper_receivables</td><td>经营性应收项目的减少(增加) </td></tr>
        <tr><td>incr_oper_payable</td><td>经营性应付项目的增加(减少) </td></tr>
        <tr><td>net_cash_flow_n</td><td>经营活动产生的现金流量净额<附表> </td></tr>
        <tr><td>debt_with_assets</td><td>联营企业以资产抵偿其对本公司的债务 </td></tr>
        <tr><td>replaced_shareholdings</td><td>少数股东以所持子公司股权置换为其对本公司的股权 </td></tr>
        <tr><td>ending_balance_of_cash</td><td>现金的期末余额 </td></tr>
        <tr><td>cash_beginning_balance</td><td>减:现金的期初余额 </td></tr>
        <tr><td>ending_cash_eq</td><td>加:现金等价物的期末余额 </td></tr>
        <tr><td>opening_cash_eq</td><td>减:现金等价物的期初余额 </td></tr>
        <tr><td>incr_net_cash_eq</td><td>现金及现金等价物净增加/(减少)额 </td></tr>
    </tbody>
    </table>
- 证券
    <table>
    <thead><tr><th>参数</th><th>说明</th></tr></thead>
    <tbody>
        <tr><td>date</td><td>日期</td></tr>
        <tr><td>n_incr_disp_tfa</td><td>处置交易性金融资产净增加额</td></tr>
        <tr><td>n_incr_disp_afa</td><td>处置可供出售金融资产净增加额</td></tr>
        <tr><td>cash_interest_commission</td><td>收取利息、手续费及佣金的现金</td></tr>
        <tr><td>n_incr_loans_oth_bank</td><td>拆入资金净增加额</td></tr>
        <tr><td>n_incr_repurchase</td><td>回购业务资金净增加额</td></tr>
        <tr><td>received_other_cash</td><td>收到的其他与经营活动有关的现金</td></tr>
        <tr><td>subtotal_cash_in_op</td><td>经营活动现金流入小计</td></tr>
        <tr><td>cash_for_employees</td><td>支付给职工以及为职工支付的现金</td></tr>
        <tr><td>various_taxes_paid</td><td>支付的各项税费</td></tr>
        <tr><td>other_cash</td><td>支付其他与经营活动有关的现金</td></tr>
        <tr><td>pay_interest_commission</td><td>支付利息、手续费及佣金的现金</td></tr>
        <tr><td>subtotal_cash_out</td><td>经营活动现金流出小计</td></tr>
        <tr><td>net_cash_flow</td><td>经营活动产生的现金流量净额</td></tr>
        <tr><td>cash_from_investment</td><td>收回投资收到的现金</td></tr>
        <tr><td>cash_investment_income</td><td>取得投资收益收到的现金</td></tr>
        <tr><td>net_cash_assets</td><td>处置固定资产、无形资产及其他长期资产收回的现金净额</td></tr>
        <tr><td>other_cash_investment</td><td>收到其他与投资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_investment</td><td>投资活动现金流入小计</td></tr>
        <tr><td>cash_paid_investment</td><td>投资支付的现金</td></tr>
        <tr><td>cash_paid_assets</td><td>购建固定资产、无形资产和其他长期资产支付的现金</td></tr>
        <tr><td>other_cash_paid_investment</td><td>支付其他与投资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out_investment</td><td>投资活动现金流出小计</td></tr>
        <tr><td>net_cash_flows_investing</td><td>投资活动产生的现金流量净额</td></tr>
        <tr><td>cash_received_investment</td><td>吸收投资收到的现金</td></tr>
        <tr><td>cash_received_loan</td><td>取得借款收到的现金</td></tr>
        <tr><td>cash_received_bonds</td><td>发行债券收到的现金</td></tr>
        <tr><td>cash_received_financing</td><td>收到其他与筹资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_financing</td><td>筹资活动现金流入小计</td></tr>
        <tr><td>cash_paid_debt</td><td>偿还债务支付的现金</td></tr>
        <tr><td>cash_paid_dpp</td><td>分配股利、利润或偿付利息所支付的现金</td></tr>
        <tr><td>other_cash_out_financing</td><td>支付其他与筹资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out_financing</td><td>筹资活动现金流出小计</td></tr>
        <tr><td>net_cash_flow_financing</td><td>筹资活动产生的现金流量净额</td></tr>
        <tr><td>exchange_rate_cash</td><td>汇率变动对现金及现金等价物的影响</td></tr>
        <tr><td>net_increase_cash</td><td>现金及现金等价物净增加额</td></tr>
        <tr><td>cash_beginning</td><td>加:期初现金及现金等价物余额</td></tr>
        <tr><td>cash_end</td><td>期末现金及现金等价物余额</td></tr>
        <tr><td>net_profit</td><td>净利润</td></tr>
        <tr><td>minority_interest_income</td><td>加:少数股东损益</td></tr>
        <tr><td>impairment_of_assets</td><td>资产减值准备</td></tr>
        <tr><td>risk_reserve_expenditure</td><td>风险准备金支出</td></tr>
        <tr><td>depreciation_of_assets</td><td>固定资产折旧、油气资产折耗、生产性生物资产折旧</td></tr>
        <tr><td>amort_ido_assets</td><td>无形资产、递延资产及其他资产摊销</td></tr>
        <tr><td>amort_intangible_assets</td><td>其中:无形资产摊销</td></tr>
        <tr><td>lt_deferred_exp_amort</td><td>长期待摊费用摊销</td></tr>
        <tr><td>lt_assets_exp_amort</td><td>长期资产摊销</td></tr>
        <tr><td>decr_deferred_exp</td><td>待摊费用减少(减:增加)</td></tr>
        <tr><td>incr_accrued_exp</td><td>预提费用增加</td></tr>
        <tr><td>disposal_of_assets</td><td>处置固定资产、无形资产和其他长期资产的损失</td></tr>
        <tr><td>fx_asset_loss</td><td>固定资产报废损失</td></tr>
        <tr><td>decr_financial_assets</td><td>金融资产的减少</td></tr>
        <tr><td>incrin_fin_liab</td><td>各种金融负债的增加</td></tr>
        <tr><td>loss_fair_value</td><td>公允价值变动损失</td></tr>
        <tr><td>financial_expenses</td><td>财务费用</td></tr>
        <tr><td>investment_loss</td><td>投资损失</td></tr>
        <tr><td>exchange_gains_losses</td><td>汇兑损益/(损失)</td></tr>
        <tr><td>decr_def_inc_tax_assets</td><td>递延所得税资产减少</td></tr>
        <tr><td>incr_def_inc_tax_liab</td><td>递延所得税负债增加</td></tr>
        <tr><td>reduction_in_inventory</td><td>存货的减少</td></tr>
        <tr><td>decr_oper_receivables</td><td>经营性应收项目的减少</td></tr>
        <tr><td>incr_oper_payable</td><td>经营性应付项目的增加</td></tr>
        <tr><td>other</td><td>其他</td></tr>
        <tr><td>net_cash_flow_n</td><td>经营活动产生的现金流量净额<附表></td></tr>
        <tr><td>conv_debt_into_cap</td><td>债务转为资本</td></tr>
        <tr><td>financing_leased_fa</td><td>融资租入固定资产</td></tr>
        <tr><td>ending_balance_of_cash</td><td>现金的期末余额</td></tr>
        <tr><td>cash_beginning_balance</td><td>减:现金的期初余额</td></tr>
        <tr><td>ending_cash_eq</td><td>加:现金等价物的期末余额</td></tr>
        <tr><td>opening_cash_eq</td><td>减:现金等价物的期初余额</td></tr>
        <tr><td>incr_net_cash_eq</td><td>现金及现金等价物净增加额</td></tr>
    </tbody>
    </table>
- 普通工商业
    <table>
    <thead><tr><th>参数</th><th>说明</th></tr></thead>
    <tbody>
        <tr><td>date</td><td>日期</td></tr>
        <tr><td>cash_sale_services</td><td>销售商品、提供劳务收到的现金</td></tr>
        <tr><td>tax_refund</td><td>收到的税费返还</td></tr>
        <tr><td>other_cash_operating</td><td>收到的其他与经营活动有关的现金</td></tr>
        <tr><td>subtotal_cash_in_operating</td><td>经营活动现金流入小计</td></tr>
        <tr><td>cash_for_goods_services</td><td>购买商品、接受劳务支付的现金</td></tr>
        <tr><td>cash_for_employees</td><td>支付给职工以及为职工支付的现金</td></tr>
        <tr><td>various_taxes_paid</td><td>支付的各项税费</td></tr>
        <tr><td>other_pay</td><td>支付的其他与经营活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out</td><td>经营活动现金流出小计</td></tr>
        <tr><td>net_cash_flow</td><td>经营活动产生的现金流量净额</td></tr>
        <tr><td>cash_from_investment</td><td>收回投资所收到的现金</td></tr>
        <tr><td>cash_investment_income</td><td>取得投资收益所收到的现金</td></tr>
        <tr><td>net_cash_assets</td><td>处置固定资产、无形资产和其他长期资产所收回的现金净额</td></tr>
        <tr><td>net_cash_subsidiaries</td><td>处置子公司及其他营业单位收到的现金净额</td></tr>
        <tr><td>other_cash_investment</td><td>收到的其他与投资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_investment</td><td>投资活动现金流入小计</td></tr>
        <tr><td>cash_paid_assets</td><td>购建固定资产、无形资产和其他长期资产所支付的现金</td></tr>
        <tr><td>cash_paid_investment</td><td>投资所支付的现金</td></tr>
        <tr><td>net_cash_paid_subsidiaries</td><td>取得子公司及其他营业单位支付的现金净额</td></tr>
        <tr><td>other_cash_paid_investment</td><td>支付的其他与投资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out_investment</td><td>投资活动现金流出小计</td></tr>
        <tr><td>net_cash_flows_investing</td><td>投资活动产生的现金流量净额</td></tr>
        <tr><td>cash_received_investment</td><td>吸收投资收到的现金</td></tr>
        <tr><td>cash_received_ms</td><td>其中：子公司吸收少数股东投资收到的现金</td></tr>
        <tr><td>cash_received_loan</td><td>取得借款收到的现金</td></tr>
        <tr><td>cash_received_bonds</td><td>发行债券收到的现金</td></tr>
        <tr><td>cash_received_financing</td><td>收到其他与筹资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_financing</td><td>筹资活动现金流入小计</td></tr>
        <tr><td>cash_paid_debt</td><td>偿还债务支付的现金</td></tr>
        <tr><td>cash_paid_dpp</td><td>分配股利、利润或偿付利息所支付的现金</td></tr>
        <tr><td>dp_paid_ms</td><td>其中：子公司支付给少数股东的股利、利润</td></tr>
        <tr><td>other_cash_out_financing</td><td>支付其他与筹资活动有关的现金</td></tr>
        <tr><td>subtotal_cash_out_financing</td><td>筹资活动现金流出小计</td></tr>
        <tr><td>net_cash_flow_financing</td><td>筹资活动产生的现金流量净额</td></tr>
        <tr><td>exchange_rate_cash</td><td>汇率变动对现金及现金等价物的影响</td></tr>
        <tr><td>net_increase_cash</td><td>现金及现金等价物净增加额</td></tr>
        <tr><td>cash_beginning</td><td>加:期初现金及现金等价物余额</td></tr>
        <tr><td>cash_end</td><td>期末现金及现金等价物余额</td></tr>
        <tr><td>net_profit</td><td>净利润</td></tr>
        <tr><td>ms_equity</td><td>少数股东权益</td></tr>
        <tr><td>uc_investment_loss</td><td>未确认的投资损失</td></tr>
        <tr><td>impairment_of_assets</td><td>资产减值准备</td></tr>
        <tr><td>depreciation_of_assets</td><td>固定资产折旧、油气资产折耗、生产性物资折旧</td></tr>
        <tr><td>amort_intangible_assets</td><td>无形资产摊销</td></tr>
        <tr><td>lt_deferred_exp_amort</td><td>长期待摊费用摊销</td></tr>
        <tr><td>reduction_deferred_expenses</td><td>待摊费用的减少</td></tr>
        <tr><td>incr_accrued_exp</td><td>预提费用的增加</td></tr>
        <tr><td>disposal_of_assets</td><td>处置固定资产、无形资产和其他长期资产的损失</td></tr>
        <tr><td>fx_asset_loss</td><td>固定资产报废损失</td></tr>
        <tr><td>loss_fair_value</td><td>公允价值变动损失</td></tr>
        <tr><td>deferred_income_increase</td><td>递延收益增加（减：减少）</td></tr>
        <tr><td>estimated_liabilities</td><td>预计负债</td></tr>
        <tr><td>financial_expenses</td><td>财务费用</td></tr>
        <tr><td>investment_loss</td><td>投资损失</td></tr>
        <tr><td>decr_def_inc_tax_assets</td><td>递延所得税资产减少</td></tr>
        <tr><td>incr_def_inc_tax_liab</td><td>递延所得税负债增加</td></tr>
        <tr><td>reduction_in_inventory</td><td>存货的减少</td></tr>
        <tr><td>decr_oper_receivables</td><td>经营性应收项目的减少</td></tr>
        <tr><td>incr_oper_payable</td><td>经营性应付项目的增加</td></tr>
        <tr><td>redc_comp_unsettle</td><td>已完工尚未结算款的减少(减:增加)</td></tr>
        <tr><td>incr_settle_unfinished</td><td>已结算尚未完工款的增加(减:减少)</td></tr>
        <tr><td>other</td><td>其他</td></tr>
        <tr><td>net_cash_flow_n</td><td>经营活动产生现金流量净额</td></tr>
        <tr><td>conv_debt_into_cap</td><td>债务转为资本</td></tr>
        <tr><td>conv_bonds_due_in_1year</td><td>一年内到期的可转换公司债券</td></tr>
        <tr><td>financing_leased_fa</td><td>融资租入固定资产</td></tr>
        <tr><td>ending_balance_of_cash</td><td>现金的期末余额</td></tr>
        <tr><td>cash_beginning_balance</td><td>现金的期初余额</td></tr>
        <tr><td>ending_cash_eq</td><td>现金等价物的期末余额</td></tr>
        <tr><td>opening_cash_eq</td><td>现金等价物的期初余额</td></tr>
        <tr><td>incr_net_cash_eq</td><td>现金及现金等价物的净增加额</td></tr>
    </tbody>
    </table>