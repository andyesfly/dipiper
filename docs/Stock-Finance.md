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
    


