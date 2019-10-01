/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const public = require("./public");
const diger = require("../utils/diger");
const format = require('string-format');
const moment = require("moment");

let balanceSheetOptions={
    bank:{
        tags:[
            {
                name:"asset",   //资产
                values:[
                    "cash&in_bank", //现金及存放中央银行款项
                    "bank_deposit", //存放同业款项
                    "lending_funds", //拆出资金
                    "noble_metal",     //贵金属
                    "tfa",   //交易性金融资产
                    "dfia",   //衍生金融工具资产
                    "brfa",   //买入返售金融资产
                    "interest_receivable",  //应收利息
                    "loans_and_advances",   //发放贷款及垫款
                    "agency_business_assets",   //代理业务资产
                    "sellable_financial_assets",    //可供出售金融资产
                    "held-to-maturity_investment",    //持有至到期投资
                    "long-term_equity_investment",  //长期股权投资
                    "investment_receivables",   //应收投资款项
                    "total_fixed_assets",   //固定资产合计
                    "intangible_assets",    //无形资产
                    "goodwill", //商誉
                    "deferred_tax_assets",  //递延税款借项
                    "investment_real_estate",   //投资性房地产
                    "other_assets", //其他资产
                    "total_assets", //资产总计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:4,
                        end:25,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },
            {
                name:"debts",   //负债
                values:[
                    "loan_from_central_bank",     //向中央银行借款
                    "interbank_deposit_withdrawal",     //同业存入及拆入
                    "interbank_deposits",     //其中:同业存放款项
                    "fund_withdrawal",     //拆入资金
                    "derivative_liabilities",     //衍生金融工具负债
                    "trading_financial_liabilities",     //交易性金融负债
                    "sell_buy_financial_assets",     //卖出回购金融资产款
                    "customer_deposit",     //客户存款(吸收存款)
                    "payable_remuneration",     //应付职工薪酬
                    "taxes_payable",     //应交税费
                    "interest_payable",     //应付利息
                    "accounts_payable",     //应付账款
                    "agency_liabilities",     //代理业务负债
                    "bonds_payable",     //应付债券
                    "deferred_tax_liability",     //递延所得税负债
                    "projected_liabilities",     //预计负债
                    "other_liabilities",     //其他负债
                    "total_liabilities",     //负债合计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:26,
                        end:44,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },
            {
                name:"equity",  //所有者权益
                values:[
                    "share_capital",   //股本
                    "capital_accumulation_fund",   //资本公积金
                    "other_comprehensive_income",   //其他综合收益
                    "surplus_reserve_fund",   //盈余公积金金
                    "undistributed_profit",   //未分配利润
                    "general_risk_preparation",   //一般风险准备
                    "translation_reserve",   //外币报表折算差额
                    "total_sea_to_parent_company",   //归属于母公司的股东权益合计
                    "minority_equity",   //少数股东权益
                    "total_equity",   //所有者权益合计
                    "total_liabilities_and_equity",   //负债及股东权益总计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:45,
                        end:60,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            }
        ]
    },
    insurance:{
        tags:[{
            name:"asset",   //资产
            values:[
                "money_funds",    //货币资金
                "withdrawal_of_funds",    //拆出资金
                "trading_financial_assets",    //交易性金融资产
                "derivative_financial_assets",    //衍生金融资产
                "buy_resale_financial_assets",    //买入返售金融资产
                "premium_receivable",    //应收保费
                "interest_receivable",    //应收利息
                "receivables",    //应收分保账款
                "responsible_undue_reserve",    //应收分保未到期责任准备金
                "receivables_unpaid_reserve",    //应收分保未决赔款准备金
                "responsible_life_reserve",    //应收分保寿险责任准备金
                "responsible_long-term_reserve",    //应收分保长期健康险责任准备金
                "policyholder_pledge_loan",    //保户质押贷款
                "for_sale_financial_assets",    //可供出售金融资产
                "held_to_maturity_investments",    //持有至到期投资
                "long-term_equity_investment",    //长期股权投资
                "deposit_capital_guarantee",    //存出资本保证金
                "receivables_investment",    //应收款项类投资
                "fixed_assets",    //固定资产
                "intangible_assets",    //无形资产
                "goodwill",    //商誉
                "separate_account_assets",    //独立账户资产
                "deferred_tax_assets",    //递延所得税资产
                "investment_real_estate",    //投资性房地产
                "time_deposit",    //定期存款
                "other_assets",    //其他资产
                "total_assets",    //资产总计
            ],
            xpath:{
                path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                param:{
                    type:"value",
                    start:4,
                    end:31,
                    append:[{
                        index:1,
                        name:"date"
                    }],
                    child:{
                        type: "group",
                        start: 2,
                        end: 5
                    }
                }
            }
        },{
            name:"debts",    //负债
            values:[
                "short-term_loan",    //短期借款
                "unpacking_funds",    //拆入资金
                "trading_fin_liabilities",    //交易性金融负债
                "derivative_fin_liabilities",    //衍生金融负债
                "sell_buy_fin_assets",    //卖出回购金融资产款	
                "advance_receipt",    //预收账款
                "advance_payment",    //预收保费
                "fees_and_commissions",    //应付手续费及佣金
                "coping_with_reinsurance",    //应付分保账款
                "payroll_payable",    //应付职工薪酬
                "taxes_payable",    //应交税费
                "interest_payable",    //应付利息
                "payables",    //应付赔付款
                "payable_policy_dividend",    //应付保单红利
                "deposits_and_investment_funds",    //保户储金及投资款
                "unexpired_liability_reserve",    //未到期责任准备金
                "pending_claims_reserve",    //未决赔款准备金
                "life_insurance_reserve",    //寿险责任准备金
                "long-term_health_reserve",    //长期健康险责任准备金
                "long_term_loan",    //长期借款
                "bonds_payable",    //应付债券
                "separate_account_liability",    //独立账户负债
                "deferred_tax_liabilities",    //递延所得税负债
                "estimated_liabilities",    //预计负债
                "other_liabilities",    //其他负债
                "total_liabilities",    //负债合计
            ],
            xpath:{
                path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                param:{
                    type:"value",
                    start:32,
                    end:57,
                    append:[{
                        index:1,
                        name:"date"
                    }],
                    child:{
                        type: "group",
                        start: 2,
                        end: 5
                    }
                }
            }
        },{
            name:"equity",  //所有者权益
            values:[
                "share_capital",   //股本
                "capital_accumulation_fund",   //资本公积金
                "other_comprehensive_income",   //其他综合收益
                "surplus_reserve_fund",   //盈余公积金金
                "undistributed_profit",   //未分配利润
                "general_risk_preparation",   //一般风险准备
                "foreign_currency_trading_diff",   //外币报表折算差额
                "total_sea_to_parent_company",   //归属于母公司的股东权益合计
                "minority_shareholders_equity",   //少数股东权益
                "total_equity",   //所有者权益合计
                "total_liabilities_and_equity",   //负债及股东权益总计
            ],
            xpath:{
                path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                param:{
                    type:"value",
                    start:58,
                    end:70,
                    append:[{
                        index:1,
                        name:"date"
                    }],
                    child:{
                        type: "group",
                        start: 2,
                        end: 5
                    }
                }
            }
        }]
    },
    security:{
        tags:[
            {
                name:"asset",    //资产
                values:[
                    "money_funds",    //货币资金
                    "customer_deposit",    //客户资金存款
                    "settlement_provisions",    //结算备付金
                    "customer_reserve_funds",    //客户备付金
                    "financing_funds",    //融出资金
                    "transactional_financial_assets",    //交易性金融资产
                    "derivative_financial_assets",    //衍生金融资产
                    "buy_resale_fin_assets",    //买入返售金融资产
                    "accounts_receivable",    //应收账款
                    "interest_receivable",    //应收利息
                    "refundable_deposits",    //存出保证金
                    "available_for_sale_fin_assets",    //可供出售金融资产
                    "held_to_maturity_investments",    //持有至到期投资
                    "long-term_equity_investment",    //长期股权投资
                    "fixed_assets",    //固定资产
                    "intangible_assets",    //无形资产
                    "trading_seat_fee",    //交易席位费
                    "goodwill",    //商誉
                    "deferred_tax_assets",    //递延所得税资产
                    "investment_real_estate",    //投资性房地产
                    "other_assets",    //投资性房地产
                    "total_assets",    //资产总计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:4,
                        end:26,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },{
                name:"debts",    //负债
                values:[
                    "short-term_loan",   //短期借款
                    "pledge_loan",   //质押借款
                    "coping_with_short-term_financing",   //应付短期融资款
                    "unpacking_funds",   //拆入资金
                    "trading_fin_liabilities",   //交易性金融负债
                    "derivative_fin_liabilities",   //衍生金融负债
                    "sell_repo_fin_assets",   //卖出回购金融资产款
                    "agent_trading_securities",   //代理买卖证券款
                    "agent_underwriting_securities",   //代理承销证券款
                    "payroll_payable",   //应付职工薪酬
                    "taxes_payable",   //应交税费
                    "accounts_payable",   //应付账款
                    "interest_payable",   //应付利息
                    "long_term_loan",   //长期借款
                    "bond_payable",   //应付债券款
                    "deferred_tax_liabilities",   //递延所得税负债
                    "estimated_liabilities",   //预计负债
                    "other_liabilities",   //其他负债
                    "total_liabilities",   //负债合计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:27,
                        end:46,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },{
                name:"equity",    //所有者权益
                values:[
                    "share_capital",    //股本
                    "other_equity_instruments",    //其他权益工具
                    "capital_accumulation_fund",    //资本公积金
                    "treasury_shares",    //库存股
                    "other_comprehensive_income",    //其他综合收益
                    "surplus_reserve_fund",    //盈余公积金金
                    "undistributed_profit",    //未分配利润
                    "general_risk_preparation",    //一般风险准备
                    "trading_risk_preparation",    //交易风险准备
                    "translation_reserve",    //外币报表折算差额
                    "total_sea_to_parent_company",    //归属于母公司所有者权益合计
                    "minority_shareholders'_equity",    //少数股东权益
                    "total_equity",    //所有者权益合计
                    "total_liabilities_and_equity",    //负债及股东权益总计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:47,
                        end:61,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            }
            
        ]
    },
    general:{
        tags:[
            {
                name:"current_assets",   //流动资产
                values:[
                    "monetary_capital", //货币资金
                    "trading_fin_assets",     //交易性金融资产
                    "derivative_fin_assets",  //衍生金融资产
                    "receivables_amount", //应收票据及应收账款
                    "bill_receivables", //应收票据
                    "receivables", //应收账款
                    "prepayment",  //预付款项
                    "interest_receivable",  //应收利息
                    "dividends_receivable", //应收股利
                    "other_receivables",    //其他应收款
                    "repo_financial_asset", //买入返售金融资产
                    "inventory", //存货
                    "assets_held_for_sale", //划分为持有待售的资产
                    "nc-assets_due_in_1year", //一年内到期的非流动资产
                    "prepaid_expense", //待摊费用
                    "unsettled", //待处理流动资产损益
                    "other_current_assets", //其他流动资产
                    "current_assets_amount", //流动资产合计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:4,
                        end:22,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },
            {
                name:"illiquid_assets", //非流动资产
                values:[
                    "loans_and_payments",   //发放贷款及垫款
                    "sales_for_fin_asset", //可供出售金融资产
                    "hold_investment_due", //持有至到期投资
                    "long_term_receivables", //长期应收款
                    "long_term_equity_investment", //长期股权投资
                    "investment_property", //投资性房地产
                    "net_fixed_assets", //固定资产净额
                    "construction_in_process", //在建工程
                    "engineering_material", //工程物资
                    "liquidation_of_fixed_assets", //固定资产清理
                    "productive_biological_asset", //生产性生物资产
                    "non-profit_living_assets", //公益性生物资产
                    "oil_and_gas_assets", //油气资产
                    "intangible_assets", //无形资产
                    "development_expenditure", //开发支出
                    "goodwill", //商誉
                    "deferred_assets", //长期待摊费用
                    "deferred_tax_assets", //递延所得税资产
                    "other_non-current_assets", //其他非流动资产
                    "total_non-current_assets", //非流动资产合计
                    "total_assets" //资产总计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        start:23,
                        end:44,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },
            {
                name:"current_liabilities", //流动负债
                values:[
                    "short_term_borrowing", //短期借款
                    "trading_fin_liabilities", //交易性金融负债
                    "notes_accounts_payable", //应付票据及应付账款
                    "notes_payable", //应付票据
                    "accounts_payable", //应付账款
                    "advance_receipt", //预收款项
                    "commission_payable", //应付手续费及佣金
                    "payroll_payable", //应付职工薪酬
                    "tax_payable", //应交税费
                    "interest_payable", //应付利息
                    "dividends_payable", //应付股利
                    "other_payables", //其他应付款
                    "accrued_expenses", //预提费用
                    "deferred_earnings_in_1year", //一年内的递延收益
                    "short_term_bond", //应付短期债券
                    "nc-liabilities_due_in_1year", //一年内到期的非流动负债
                    "other_current_liability", //其他流动负债
                    "total_current_liability", //流动负债合计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        start:45,
                        end:63,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },
            {
                name:"non-current_liability",    //非流动负债
                values:[
                    "long_term_loan", //长期借款
                    "bonds_payable",  //应付债券
                    "long_term_payable", //长期应付款
                    "long_term_payroll_payable", //长期应付职工薪酬
                    "special_payable", //专项应付款
                    "estimated_nc_liabilities", //预计非流动负债
                    "deferred_tax_liabilities", //递延所得税负债
                    "long_term_deferred_earnings", //长期递延收益
                    "other_nc_liabilities", //其他非流动负债
                    "total_nc_liabilities", //非流动负债合计
                    "total_liability", //负债合计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        start:64,
                        end:75,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            },
            {
                name:"owner's_equity",    //所有者权益
                values:[
                    "paid-up_or_share_capital",   //实收资本(或股本)
                    "capital_reserve",   //资本公积金
                    "less:_treasury_shares",   //减：库存股
                    "other_comprehensive_income",   //其他综合收益
                    "special_reserves",   //专项储备
                    "surplus_reserve",   //盈余公积
                    "general_risk_preparation",   //一般风险准备
                    "undistributed_profit",   //未分配利润
                    "total_sea_to_parent_company",   //归属于母公司股东权益合计
                    "minority_shareholders'_equity",   //少数股东权益
                    "total_equity",   //所有者权益(或股东权益)合计
                    "total_liabilities_and_equity",   //负债和所有者权益(或股东权益)总计
                ],
                xpath:{
                    path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        start:76,
                        end:88,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 5
                        }
                    }
                }
            }
        ]
    }
}

let finance ={
    /**
     * @param {string} code 股票代码
     * @param {string} year 年份
     * @returns {json} 股票财务指标
     */
    getGuideLine:async(code,year)=>{
        let options={
            tags:[
                {
                    name:"share_index", //每股指标
                    values:[
                        "Diluted_EPS",  //摊薄每股收益
                        "EPSWA",        //加权每股收益
                        "AEPS",         //每股收益_调整后
                        "EPS_NGOL",     //扣除非经常性损益后的每股收益
                        "BPS",          //每股净资产_调整前
                        "BPS_Adjusted", //每股净资产_调整后
                        "OCFPS",        //每股经营性现金流
                        "CRPS",         //每股资本公积金
                        "UDPPS",        //每股未分配利润
                    ],
                    xpath:{
                        path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                        param: {
                            type:"value",
                            start:3,
                            end:12,
                            append:[{index:1,
                                name:"Date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 5
                            }
                        }
                    }
                },{
                    name:"profitability",            //盈利能力
                    values:[
                        "OROA",         //总资产利润率
                        "OPE",          //主营业务利润率
                        "PROA",         //总资产净利润率
                        "ROPTC",        //成本费用利润率
                        "OPR",          //营业利润率
                        "COGSTS",       //主营业务成本率
                        "PMOS",         //销售净利率
                        "DOE",          //股本报酬率
                        "ROC",          //净资产报酬率
                        "ROA",          //资产报酬率
                        "SGPR",         //销售毛利率
                        "POTE",         //三项费用比重
                        "NMP",          //非主营比重
                        "POMP",         //主营利润比重
                        "RR",           //股息发放率
                        "ROI",          //投资收益率
                        "GP",           //主营业务利润(元)
                        "ROE",          //净资产收益率
                        "ROEWA",        //加权净资产收益率
                        "NPAD",         //扣除非经常性损益后的净利润
                    ],
                    xpath:{
                        path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                        param: {
                            type:"value",
                            start:14,
                            end:34,
                            append:[{index:1,
                                name:"Date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 5
                            }
                        }
                    }
                },{
                    name:"growth_ability",   //成长能力
                    values:[
                        "MBRG",         //主营业务收入增长率
                        "NPGR",         //净利润增长率
                        "GRNA",         //净资产增长率
                        "GRTA",         //总资产增长率
                    ],
                    xpath:{
                        path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                        param: {
                            type:"value",
                            start:35,
                            end:39,
                            append:[{index:1,
                                name:"Date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 5
                            }
                        }
                    }
                },{
                    name:"operation_ability",   //营运能力
                    values:[
                        "ART",          //应收账款周转率(次)
                        "DSO",          //应收账款周转天数
                        "DSI",          //存货周转天数
                        "RST",          //存货周转率(次)
                        "TFA",          //固定资产周转率(次)
                        "TATO",         //总资产周转率(次)
                        "TATD",         //总资产周转天数(天)
                        "CATA",         //流动资产周转率(次)
                        "DCAT",         //流动资产周转天数(天)
                    ],
                    xpath:{
                        path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                        param: {
                            type:"value",
                            start:40,
                            end:49,
                            append:[{index:1,
                                name:"Date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 5
                            }
                        }
                    }
                },{
                    name:"debt_decapital_structure",            //偿债及资本结构
                    values:[
                        "AR",           //流动比率
                        "QR",           //速动比率
                        "CR",           //现金比率(%)
                        "ICR",          //利息支付倍数
                        "LDWCR",        //长期债务与营运资金比率(%)
                        "EAR",          //股东权益比率(%)
                        "LDR",          //长期负债比率(%)
                        "REFA",         //股东权益与固定资产比率(%)
                        "DER",          //负债与所有者权益比率(%)
                        "RLALF",        //长期资产与长期资金比率(%)
                        "MCR",          //资本化比率(%)
                        "FANWR",        //固定资产净值率(%)
                        "CIR",          //资本固定化比率(%)
                        "ER",           //产权比率(%)
                        "LVR",          //清算价值比率(%)
                        "POFA",         //固定资产比重(%)
                        "LEV",          //资产负债率(%)
                        "ASSET",        //总资产(元)
                    ],
                    xpath:{
                        path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                        param: {
                            type:"value",
                            start:51,
                            end:69,
                            append:[{index:1,
                                name:"Date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 5
                            }
                        }
                    }
                },{
                    name:"cash_flow",       //现金流量
                    values:[
                        "NOCFTSR",      //经营现金净流量对销售收入比率(%)
                        "ROOCFOA",      //资产的经营现金流量回报率(%)
                        "NOCFTNP",      //经营现金净流量与净利润的比率(%)
                        "NOCFTDR",      //经营现金净流量对负债比率(%)
                        "CFR"           //现金流量比率(%)
                    ],
                    xpath:{
                        path:"//table[@id='BalanceSheetNewTable0']//tr[{0}]//td[{1}]",
                        param: {
                            type:"value",
                            start:70,
                            end:75,
                            append:[{index:1,
                                name:"Date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 5
                            }
                        }
                    }
                }
            ]
        }
        return await diger(format(public.stock_guidline.url,code,year),options);
    },
    /**
     * @param {string} code 股票代码
     * @param {string} year 年份
     * @returns {json} 资产负债表
     */
    getBalanceSheet: async(code,year,company_type)=>{
        let options = balanceSheetOptions[company_type]
        return await diger(format(public.stock_balancesheet.url,code,year),options);
    }
}

module.exports = finance;