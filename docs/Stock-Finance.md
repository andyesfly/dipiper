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
            <tr><td>code</td><td>年份</td></tr>
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
            },
            {
                "Date": "2018-09-30",
                "Diluted_EPS": "3.5309",
                "EPSWA": "3.51",
                "AEPS": "3.51",
                "EPS_NGOL": "--",
                "BPS": "14.6365",
                "BPS_Adjusted": "14.4098",
                "OCFPS": "2.5057",
                "CRPS": "0.0173",
                "UDPPS": "12.7763"
            },
            {
                "Date": "2018-06-30",
                "Diluted_EPS": "2.1419",
                "EPSWA": "2.13",
                "AEPS": "2.13",
                "EPS_NGOL": "2.1",
                "BPS": "13.2392",
                "BPS_Adjusted": "13.0198",
                "OCFPS": "1.486",
                "CRPS": "0.0173",
                "UDPPS": "11.3945"
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
            },
            {
                "Date": "2018-09-30",
                "OROA": "8.5814",
                "OPE": "29.2972",
                "PROA": "9.1855",
                "ROPTC": "20.9497",
                "OPR": "16.7768",
                "COGSTS": "69.8466",
                "PMOS": "14.2846",
                "DOE": "353.091",
                "ROC": "24.1241",
                "ROA": "8.5814",
                "SGPR": "30.1534",
                "POTE": "10.0719",
                "NMP": "1.3664",
                "POMP": "173.1306",
                "RR": "--",
                "ROI": "--",
                "GP": "43564580480.6",
                "ROE": "24.36",
                "ROEWA": "27.76",
                "NPAD": "21345703240.01"
            },
            {
                "Date": "2018-06-30",
                "OROA": "5.8819",
                "OPE": "29.1896",
                "PROA": "5.9375",
                "ROPTC": "19.9461",
                "OPR": "16.6022",
                "COGSTS": "69.9735",
                "PMOS": "14.1634",
                "DOE": "390.6459",
                "ROC": "29.5067",
                "ROA": "10.7274",
                "SGPR": "30.0265",
                "POTE": "13.5287",
                "NMP": "5.277",
                "POMP": "173.5168",
                "RR": "0.0001",
                "ROI": "--",
                "GP": "26555584567.54",
                "ROE": "16.35",
                "ROEWA": "17.8",
                "NPAD": "12632290055.79"
            }
        ],
        "growth_ability": [
            {
                "Date": "2018-12-31",
                "MBRG": "33.6084",
                "NPGR": "17.1953",
                "GRNA": "38.7222",
                "GRTA": "16.8705"
            },
            {
                "Date": "2018-09-30",
                "MBRG": "34.1142",
                "NPGR": "36.7474",
                "GRNA": "47.3861",
                "GRTA": "12.1414"
            },
            {
                "Date": "2018-06-30",
                "MBRG": "31.4978",
                "NPGR": "35.5871",
                "GRNA": "48.7177",
                "GRTA": "7.0822"
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
            },
            {
                "Date": "2018-09-30",
                "ART": "23.9504",
                "DSO": "11.2733",
                "DSI": "36.6948",
                "RST": "7.358",
                "TFA": "--",
                "TATO": "0.643",
                "TATD": "419.9067",
                "CATA": "0.8058",
                "DCAT": "335.0707"
            },
            {
                "Date": "2018-06-30",
                "ART": "11.7758",
                "DSO": "15.2856",
                "DSI": "41.9659",
                "RST": "4.2892",
                "TFA": "5.2485",
                "TATO": "0.4192",
                "TATD": "429.3893",
                "CATA": "0.5304",
                "DCAT": "339.3665"
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
            },
            {
                "Date": "2018-09-30",
                "AR": "1.2444",
                "QR": "1.171",
                "CR": "65.6852",
                "ICR": "-3513.3509",
                "LDWCR": "--",
                "EAR": "35.5721",
                "LDR": "--",
                "REFA": "--",
                "DER": "181.1192",
                "RLALF": "--",
                "MCR": "--",
                "FANWR": "--",
                "CIR": "56.7605",
                "ER": "180.2878",
                "LVR": "--",
                "POFA": "--",
                "LEV": "64.4279",
                "ASSET": "247522819968.7"
            },
            {
                "Date": "2018-06-30",
                "AR": "1.2366",
                "QR": "1.142",
                "CR": "73.492",
                "ICR": "-4754.3087",
                "LDWCR": "--",
                "EAR": "36.3559",
                "LDR": "--",
                "REFA": "463.683",
                "DER": "175.0588",
                "RLALF": "--",
                "MCR": "--",
                "FANWR": "61.8049",
                "CIR": "59.6854",
                "ER": "174.1715",
                "LVR": "--",
                "POFA": "7.8407",
                "LEV": "63.6441",
                "ASSET": "219066763651.75"
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
            },
            {
                "Date": "2018-09-30",
                "NOCFTSR": "0.1014",
                "ROOCFOA": "0.0609",
                "NOCFTNP": "0.7097",
                "NOCFTDR": "0.0945",
                "CFR": "9.4958"
            },
            {
                "Date": "2018-06-30",
                "NOCFTSR": "0.0983",
                "ROOCFOA": "0.0408",
                "NOCFTNP": "0.6937",
                "NOCFTDR": "0.0641",
                "CFR": "6.4442"
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