/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 * 个股财务信息（财务指标、三大报表）
 *--------------------------------------------------------------------------------------------*/
const public = require("../common/public");
const digger = require("../utils/digger");
const format = require('string-format');
const moment = require("moment");

let balanceSheetOptions={
    bank:{
        tags:[
            {
                name:"asset",   //资产
                values:[
                    "cash_deposit", //现金及存放中央银行款项
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
                            end: 6
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
                            end: 6
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
                            end: 6
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
                        end: 6
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
                        end: 6
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
                        end: 6
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
                            end: 6
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
                            end: 6
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
                            end: 6
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
                            end: 6
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
                        type:"value",
                        start:23,
                        end:44,
                        append:[{
                            index:1,
                            name:"date"
                        }],
                        child:{
                            type: "group",
                            start: 2,
                            end: 6
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
                            end: 6
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
                            end: 6
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
                            end: 6
                        }
                    }
                }
            }
        ]
    }
}

let profitStatementOptions={
    bank:{
        tags:[
            {
                name:"profit_statemet",
                values:[
                    "date",
                    "operating_income",     //营业收入
                    "net_interest_income",     //利息净收入
                    "interest_income",     //其中：利息收入
                    "interest_expense",     //减：利息支出
                    "n_fee_comm_income",     //手续费及佣金净收入
                    "comm_income",     //其中:手续费及佣金收入
                    "comm_expenses",     //减：手续费及佣金支出
                    "exchange_gains",     //汇兑收益
                    "investment_income",     //投资净收益
                    "jv_invest_income",     //其中:对联营公司的投资收益
                    "fair_value_change_income",     //公允价值变动净收益
                    "other_income",     //其他业务收入
                    "operating_expenses",     //营业支出
                    "tax_surcharges",     //营业税金及附加
                    "management_expenses",     //业务及管理费用
                    "asset_loss",     //资产减值损失
                    "other_expenses",     //其他业务支出
                    "operating_profit",     //营业利润
                    "plus_nop_income",     //加:营业外收入
                    "less_nop_expenses",     //减:营业外支出
                    "total_profit",     //利润总额
                    "less_income_tax",     //减:所得税
                    "net_profit",     //净利润
                    "profits_to_pcom",     //归属于母公司的净利润
                    "minority_interest_income",     //少数股东权益
                    "basic_earnings_per_share",     //基本每股收益(元/股)
                    "diluted_earnings_per_share",     //稀释每股收益(元/股)
                    "other_compr_income",     //其他综合收益
                    "t_compr_income",     //综合收益总额
                    "t_compr_income_attr_p",     //归属于母公司所有者的综合收益总额
                    "t_compr_income_attr_ms",     //归属于少数股东的综合收益总额
                ],
                xpath:{
                    path:"//table[@id='ProfitStatementNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:35,
                        exclude:[28],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    },
    insurance:{
        tags:[
            {
                name:"profit_statemet",
                values:[
                    "date",
                    "operating_income",     //营业收入
                    "earned_premium",     //已赚保费
                    "prem_income",     //保费业务收入
                    "reins_income",     //其中:分保费收入
                    "out_prem",     //减:分出保费
                    "une_prem_reser",     //提取未到期责任准备金
                    "investment_income",     //投资净收益
                    "jv_invest_loss",     //其中:对联营企业和合营企业的投资损失
                    "fair_value_change_income",     //公允价值变动损益
                    "exchange_gains",     //汇兑损益
                    "other_income",     //其他业务收入
                    "operating_expenses",     //营业支出
                    "withdrawal",     //退保金
                    "payout",     //赔付支出
                    "compens_payout_refu",     //减:摊回赔付支出
                    "reser_insur_liab",     //提取保险责任准备金
                    "insur_reser_refu",     //减:摊回保险责任准备金
                    "div_payt",     //保户红利支出
                    "reinsurance_costs",     //分保费用
                    "tax_surcharges",     //营业税金及附加
                    "comm_expenses",     //手续费及佣金支出
                    "management_costs",     //管理费用
                    "reins_cost_refund",     //减:摊回分保费用
                    "other_expenses",     //其他业务成本
                    "asset_loss",     //资产减值损失
                    "operating_profit",     //营业利润
                    "plus_nop_income",     //加:营业外收入
                    "less_nop_expenses",     //减:营业外支出
                    "total_profit",     //利润总额
                    "less_income_tax",     //减:所得税
                    "net_profit",     //净利润
                    "profits_to_pcom",     //归属于母公司的净利润
                    "minority_interest_income",     //少数股东权益
                    "basic_earnings_per_share",     //基本每股收益(元/股)
                    "diluted_earnings_per_share",     //稀释每股收益(元/股)
                    "other_compr_income",     //其他综合收益
                    "t_compr_income",     //综合收益总额
                    "t_compr_income_attr_p",     //归属于母公司所有者的综合收益总额
                    "t_compr_income_attr_ms",     //归属于少数股东的综合收益总额
                ],
                xpath:{
                    path:"//table[@id='ProfitStatementNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:43,
                        exclude:[36],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    },
    security:{
        tags:[
            {
                name:"profit_statemet",
                values:[
                    "date",
                    "operating_income",     //营业收入
                    "n_fee_comm_income",     //手续费及佣金净收入
                    "n_sec_tb_income",     //代理买卖证券业务净收入
                    "n_sec_uw_income",     //证券承销业务净收入
                    "n_asset_mg_income",     //受托客户资产管理业务净收入
                    "net_interest_income",     //利息净收入
                    "interest_income",     //其中:利息收入
                    "interest_expense",     //利息支出
                    "investment_income",     //投资收益
                    "jv_invest_income",     //其中:对联营企业和合营企业的投资收益
                    "fair_value_change_income",     //公允价值变动损益
                    "exchange_gains",     //汇兑损益
                    "other_income",     //其他业务收入
                    "operating_expenses",     //营业支出
                    "tax_surcharges",     //营业税金及附加
                    "management_costs",     //管理费用
                    "asset_loss",     //资产减值损失
                    "other_expenses",     //其他业务成本
                    "operating_profit",     //营业利润
                    "plus_nop_income",     //加:营业外收入
                    "less_nop_expenses",     //减:营业外支出
                    "total_profit",     //利润总额
                    "less_income_tax",     //减:所得税
                    "net_profit",     //净利润
                    "profits_to_pcom",     //归属于母公司的净利润
                    "minority_interest_income",     //少数股东权益
                    "earnings_per_share",     //每股收益
                    "basic_earnings_per_share",     //基本每股收益(元/股)
                    "diluted_earnings_per_share",     //稀释每股收益(元/股)
                    "other_compr_income",     //其他综合收益
                    "t_compr_income",     //综合收益总额
                    "t_compr_income_attr_p",     //归属于母公司所有者的综合收益总额
                    "t_compr_income_attr_ms",     //归属于少数股东的综合收益总额
                ],
                xpath:{
                    path:"//table[@id='ProfitStatementNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:36,
                        exclude:[29],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    },
    general:{
        tags:[
            {
                name:"profit_statemet",
                values:[
                    "date",
                    "total_income",     //营业总收入
                    "income",     //营业收入
                    "total_costs	",     //营业总成本
                    "costs",     //营业成本
                    "tax_surcharges",     //营业税金及附加
                    "sales_expense",     //销售费用
                    "management_costs",     //管理费用
                    "financial_expenses",     //财务费用
                    "asset_loss",     //资产减值损失
                    "fair_value_change_income",     //公允价值变动收益
                    "investment_income",     //投资净收益
                    "jv_invest_income",     //其中:对联营企业和合营企业的投资收益
                    "exchange_gains",     //汇兑收益
                    "operating_profit",     //营业利润
                    "plus_nop_income",     //加:营业外收入
                    "less_nop_expenses",     //减：营业外支出
                    "nca_disploss",     //其中：非流动资产处置损失
                    "total_profit",     //利润总额
                    "deduct_income_tax",     //减：所得税费用
                    "net_profit",     //净利润
                    "profits_to_pcom",     //归属于母公司所有者的净利润
                    "minority_interest_income",     //少数股东损益
                    "basic_earnings_per_share",     //基本每股收益(元/股)
                    "diluted_earnings_per_share",     //稀释每股收益(元/股)
                    "other_compr_income",     //其他综合收益
                    "t_compr_income",     //综合收益总额
                    "t_compr_income_attr_p",     //归属于母公司所有者的综合收益总额
                    "t_compr_income_attr_ms",     //归属于少数股东的综合收益总额
                ],
                xpath:{
                    path:"//table[@id='ProfitStatementNewTable0']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:32,
                        exclude:[25],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    }
}

let cashFlowOptions={
    bank:{
        tags:[
            {
                name:"cash_flow",
                values:[
                    "date",
                    "net_incr_deposits",     //客户存款和同业存放款项净增加额
                    "net_incr_borrowing_ctbank",     //向央行借款净增加额
                    "net_incr_borr_oth_fi",     //向其他金融机构拆入资金净增加额
                    "cash_interest_commission",     //收取利息、手续费及佣金的现金
                    "received_other_cash",     //收到其他与经营活动有关的现金
                    "subtotal_cash_in_op",     //经营活动现金流入小计
                    "net_incr_cust_loans",     //客户贷款及垫款净增加额
                    "deposit_net_incr",     //存放中央银行和同业款项净增加额
                    "cash_for_employees",     //支付给职工以及为职工支付的现金
                    "various_taxes_paid",     //支付的各项税费
                    "other_pay",     //支付其他与经营活动有关的现金
                    "pay_interest_commission",     //支付利息、手续费及佣金的现金
                    "subtotal_cash_out",     //经营活动现金流出小计
                    "net_cash_flow",     //经营活动产生的现金流量净额
                    "cash_from_investment",     //收回投资收到的现金
                    "cash_investment_income",     //取得投资收益收到的现金
                    "net_cash_assets",     //处置固定资产、无形资产及其他资产而收到的现金
                    "net_cash_subsidiaries",     //取得子公司及其他营业单位所收到的现金净额
                    "other_cash_investment",     //收到其他与投资活动有关的现金
                    "subtotal_cash_investment",     //投资活动现金流入小计
                    "cash_paid_investment",     //投资所支付的现金
                    "cash_paid_assets",     //购建固定资产、无形资产和其他长期资产支付的现金
                    "other_cash_paid_investment",     //支付的其他与投资活动有关的现金
                    "subtotal_cash_out_investment",     //投资活动现金流出小计
                    "net_cash_flows_investing",     //投资活动产生的现金流量净额
                    "cash_received_investment",     //吸收投资所收到的现金
                    "cash_received_securitized",     //发行证券化资产所吸收的现金
                    "cash_received_bonds",     //发行债券收到的现金
                    "cash_received_capital",     //增加股本所收到的现金
                    "cash_received_financing",     //收到其他与筹资活动有关的现金
                    "subtotal_cash_financing",     //筹资活动现金流入小计
                    "cash_paid_debt",     //偿还债务所支付的现金
                    "cash_paid_dpp",     //分配股利、利润或偿付利息支付的现金
                    "cash_paid_interest",     //其中:偿付利息所支付的现金
                    "pay_ns_issuance",     //支付新股发行费用
                    "other_cash_out_financing",     //支付其他与筹资活动有关的现金
                    "subtotal_cash_out_financing",     //筹资活动现金流出小计
                    "net_cash_flow_financing",     //筹资活动产生的现金流量净额
                    "exchange_rate_cash",     //四、汇率变动对现金及现金等价物的影响
                    "net_increase_cash",     //五、现金及现金等价物净增加额
                    "cash_beginning",     //加:期初现金及现金等价物余额
                    "cash_end",     //六、期末现金及现金等价物余额
                    "net_profit",     //净利润
                    "ms_equity",     //加:少数股东收益
                    "impairment_of_assets",     //计提的资产减值准备
                    "provision_bad_debts",     //其中：计提的坏账准备
                    "provision_for_loan_loss",     //计提的贷款损失准备
                    "rb_impairment_provision",     //冲回存放同业减值准备
                    "depreciation_of_assets",     //固定资产折旧、油气资产折耗、生产性生物资产折旧
                    "inv_prop_depreciation",     //投资性房地产折旧
                    "amort_intangible_ado",     //无形资产、递延资产及其他资产的摊销
                    "amort_intangible_assets",     //其中:无形资产摊销
                    "lt_deferred_exp_amort",     //长期待摊费用摊销
                    "lt_asset_amortization",     //长期资产摊销
                    "disposal_of_assets",     //处置固定资产、无形资产和其他长期产的损失/(收益)
                    "disposal_of_inv_prop",     //处置投资性房地产的损失/(收益)
                    "fx_asset_loss",     //固定资产报废损失
                    "financial_expenses",     //财务费用
                    "investment_loss",     //投资损失(减:收益)
                    "loss_fair_value",     //公允价值变动(收益)/损失
                    "exchange_gains_losses",     //汇兑损益
                    "net_gains_loss_derivative",     //衍生金融工具交易净损益
                    "discounted_withdrawal",     //折现回拔(减值资产利息冲转)
                    "reduction_in_inventory",     //存货的减少
                    "reduction_in_loans",     //贷款的减少
                    "increase_in_deposits",     //存款的增加
                    "net_increase_in_borrowings",     //拆借款项的净增
                    "reduction_financial_assets",     //金融性资产的减少
                    "estimated_incr_liabilities",     //预计负债的增加
                    "received_writeoffs",     //收到已核销款项
                    "decr_def_inc_tax_assets",     //递延所得税资产的减少
                    "incr_def_inc_tax_liab",     //递延所得税负债的增加
                    "incr_oper_receivables",     //经营性应收项目的增加
                    "incr_oper_payables",     //经营性应付项目的增加
                    "decr_other_assets",     //经营性其他资产的减少
                    "incr_other_liabilities",     //经营性其他负债的增加
                    "other",     //其他
                    "net_cash_flow_op",     //经营活动现金流量净额
                    "repay_debts_with_fa",     //以固定资产偿还债务
                    "repay_debts_with_inv",     //以投资偿还债务
                    "invest_in_fa",     //以固定资产进行投资
                    "conv_debt_into_cap",     //债务转为资本
                    "convertible_bonds_in_1year",     //一年内到期的可转换公司债券
                    "financing_leased_fa",     //融资租入固定资产
                    "other_inv_fr_cash",     //其他不涉及现金收支的投资和筹资活动金额
                    "ending_balance_of_cash",     //现金的期末余额
                    "cash_beginning_balance",     //减:现金的期初余额
                    "ending_cash_eq",     //现金等价物的期末余额
                    "opening_cash_eq",     //减：现金等价物的期初余额
                    "incr_net_cash_eq",     //现金及现金等价物净增加额
                ],
                xpath:{
                    path:"//table[@class='table']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:97,
                        exclude:[2,3,18,30,48],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    },
    insurance:{
        tags:[
            {
                name:"cash_flow",
                values:[
                    "date",
                    "prem_fr_orig_contr",     //收到原保险合同保费取得的现金 
                    "n_reinsur_prem",     //收到再保业务现金净额 
                    "other_cash_operating",     //收到其他与经营活动有关的现金 
                    "n_incr_insured_dep",     //保户储金净增加额 
                    "subtotal_cash_in_operating",     //经营活动现金流入小计 
                    "c_pay_claims_orig_inco",     //支付原保险合同赔付款项的现金 
                    "cash_for_employees",     //支付给职工以及为职工支付的现金 
                    "pay_handling_chrg",     //支付手续费的现金 
                    "various_taxes_paid",     //支付的各项税费 
                    "other_pay",     //支付其他与经营活动有关的现金 
                    "pay_policy_bonus",     //支付保单红利的现金 
                    "subtotal_cash_out",     //经营活动现金流出小计 
                    "net_cash_flow",     //经营活动产生的现金流量净额 
                    "cash_from_investment",     //收回投资收到的现金 
                    "cash_investment_income",     //取得投资收益收到的现金 
                    "net_cash_assets",     //处置固定资产、无形资产和其他长期资产收回的现金净额 
                    "net_cash_subsidiaries",     //处置子公司及其他营业单位收到的现金 
                    "other_cash_investment",     //收到其他与投资活动有关的现金 
                    "subtotal_cash_investment",     //投资活动现金流入小计 
                    "cash_paid_investment",     //投资支付的现金 
                    "net_incr_loans",     //质押贷款净增加额 
                    "cash_paid_assets",     //购建固定资产、无形资产和其他长期资产支付的现金 
                    "net_cash_paid_subsidiaries",     //购买子公司及其他营业单位支付的现金净额 
                    "other_cash_paid_investment",     //支付其他与投资活动有关的现金 
                    "subtotal_cash_out_investment",     //投资活动现金流出小计 
                    "net_cash_flows_investing",     //投资活动产生的现金流量净额 
                    "cash_received_investment",     //吸收投资收到的现金 
                    "cash_received_loan",     //取得借款收到的现金 
                    "cash_received_bonds",     //发行债券收到的现金 
                    "cash_received_financing",     //收到其他与筹资活动有关的现金 
                    "subtotal_cash_financing",     //筹资活动现金流入小计 
                    "cash_paid_debt",     //偿还债务支付的现金 
                    "cash_paid_dpp",     //分配股利、利润或偿付利息所支付的现金 
                    "other_cash_out_financing",     //支付的其他与筹资活动有关的现金 
                    "subtotal_cash_out_financing",     //筹资活动现金流出小计 
                    "net_cash_flow_financing",     //筹资活动产生的现金流量净额 
                    "exchange_rate_cash",     //四、汇率变动对现金及现金等价物的影响 
                    "net_increase_cash",     //五、现金及现金等价物净增加额 
                    "cash_beginning",     //加:期初现金及现金等价物余额 
                    "cash_end",     //六、期末现金及现金等价物余额 
                    "net_profit",     //净利润 
                    "impairment_of_assets",     //加:计提(转回)资产减值准备 
                    "estimated_liabilities",     //计提的预计负债 
                    "net_liability_reserves",     //提取的各项保险责任准备金净额 
                    "unexpired_liability_reserve",     //提取的未到期的责任准备金 
                    "inv_prop_depreciation",     //投资性房地产折旧 
                    "depreciation_of_assets",     //固定资产折旧、油气资产折耗、生产性生物资产折旧 
                    "amort_ido_assets",     //无形资产、递延资产及其他资产摊销 
                    "amort_intangible_assets",     //其中:无形资产摊销 
                    "lt_deferred_exp_amort",     //长期待摊费用摊销 
                    "lt_assets_exp_amort",     //长期资产摊销 
                    "incr_accrued_exp",     //预提费用的增加 
                    "disposal_of_assets",     //处置固定资产、无形资产和其他长期资产的损失(收益) 
                    "disposal_invest_prop",     //处置投资性房地产的收益 
                    "investment_income",     //投资收益 
                    "loss_fair_value",     //公允价值变动损失(收益) 
                    "automatic_premium_payment",     //自动垫缴保费收入 
                    "interest_income",     //利息收入 
                    "interest_expense",     //利息支出 
                    "exchange_gains_losses",     //汇兑损失(收益) 
                    "incr_deposits_invest",     //保户储金及投资款的增加 
                    "deferred_income_tax",     //递延所得税费用 
                    "decr_def_inc_tax_assets",     //其中:递延所得税资产的减少(增加) 
                    "incr_def_inc_tax_liab",     //递延所得税负债的减少(增加) 
                    "decr_financial_assets",     //金融资产的减少 
                    "incr_financial_liabilities",     //金融负债的增加 
                    "decr_oper_receivables",     //经营性应收项目的减少(增加) 
                    "incr_oper_payable",     //经营性应付项目的增加(减少) 
                    "net_cash_flow_n",     //经营活动产生的现金流量净额<附表> 
                    "debt_with_assets",     //联营企业以资产抵偿其对本公司的债务 
                    "replaced_shareholdings",     //少数股东以所持子公司股权置换为其对本公司的股权 
                    "ending_balance_of_cash",     //现金的期末余额 
                    "cash_beginning_balance",     //减:现金的期初余额 
                    "ending_cash_eq",     //加:现金等价物的期末余额 
                    "opening_cash_eq",     //减:现金等价物的期初余额 
                    "incr_net_cash_eq",     //现金及现金等价物净增加/(减少)额 
                ],
                xpath:{
                    path:"//table[@class='table']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:83,
                        exclude:[2,3,17,31,46],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    },
    security:{
        tags:[
            {
                name:"cash_flow",
                values:[
                    "date",
                    "n_incr_disp_tfa",     //处置交易性金融资产净增加额
                    "n_incr_disp_afa",     //处置可供出售金融资产净增加额
                    "cash_interest_commission",     //收取利息、手续费及佣金的现金
                    "n_incr_loans_oth_bank",     //拆入资金净增加额
                    "n_incr_repurchase",     //回购业务资金净增加额
                    "received_other_cash",     //收到的其他与经营活动有关的现金
                    "subtotal_cash_in_op",     //经营活动现金流入小计
                    "cash_for_employees",     //支付给职工以及为职工支付的现金
                    "various_taxes_paid",     //支付的各项税费
                    "other_cash",     //支付其他与经营活动有关的现金
                    "pay_interest_commission",     //支付利息、手续费及佣金的现金
                    "subtotal_cash_out",     //经营活动现金流出小计
                    "net_cash_flow",     //经营活动产生的现金流量净额
                    "cash_from_investment",     //收回投资收到的现金
                    "cash_investment_income",     //取得投资收益收到的现金
                    "net_cash_assets",     //处置固定资产、无形资产及其他长期资产收回的现金净额
                    "other_cash_investment",     //收到其他与投资活动有关的现金
                    "subtotal_cash_investment",     //投资活动现金流入小计
                    "cash_paid_investment",     //投资支付的现金
                    "cash_paid_assets",     //购建固定资产、无形资产和其他长期资产支付的现金
                    "other_cash_paid_investment",     //支付其他与投资活动有关的现金
                    "subtotal_cash_out_investment",     //投资活动现金流出小计
                    "net_cash_flows_investing",     //投资活动产生的现金流量净额
                    "cash_received_investment",     //吸收投资收到的现金
                    "cash_received_loan",     //取得借款收到的现金
                    "cash_received_bonds",     //发行债券收到的现金
                    "cash_received_financing",     //收到其他与筹资活动有关的现金
                    "subtotal_cash_financing",     //筹资活动现金流入小计
                    "cash_paid_debt",     //偿还债务支付的现金
                    "cash_paid_dpp",     //分配股利、利润或偿付利息所支付的现金
                    "other_cash_out_financing",     //支付其他与筹资活动有关的现金
                    "subtotal_cash_out_financing",     //筹资活动现金流出小计
                    "net_cash_flow_financing",     //筹资活动产生的现金流量净额
                    "exchange_rate_cash",     //汇率变动对现金及现金等价物的影响
                    "net_increase_cash",     //现金及现金等价物净增加额
                    "cash_beginning",     //加:期初现金及现金等价物余额
                    "cash_end",     //期末现金及现金等价物余额
                    "net_profit",     //净利润
                    "minority_interest_income",     //加:少数股东损益
                    "impairment_of_assets",     //资产减值准备
                    "risk_reserve_expenditure",     //风险准备金支出
                    "depreciation_of_assets",     //固定资产折旧、油气资产折耗、生产性生物资产折旧
                    "amort_ido_assets",     //无形资产、递延资产及其他资产摊销
                    "amort_intangible_assets",     //其中:无形资产摊销
                    "lt_deferred_exp_amort",     //长期待摊费用摊销
                    "lt_assets_exp_amort",     //长期资产摊销
                    "decr_deferred_exp",     //待摊费用减少(减:增加)
                    "incr_accrued_exp",     //预提费用增加
                    "disposal_of_assets",     //处置固定资产、无形资产和其他长期资产的损失
                    "fx_asset_loss",     //固定资产报废损失
                    "decr_financial_assets",     //金融资产的减少
                    "incrin_fin_liab",     //各种金融负债的增加
                    "loss_fair_value",     //公允价值变动损失
                    "financial_expenses",     //财务费用
                    "investment_loss",     //投资损失
                    "exchange_gains_losses",     //汇兑损益/(损失)
                    "decr_def_inc_tax_assets",     //递延所得税资产减少
                    "incr_def_inc_tax_liab",     //递延所得税负债增加
                    "reduction_in_inventory",     //存货的减少
                    "decr_oper_receivables",     //经营性应收项目的减少
                    "incr_oper_payable",     //经营性应付项目的增加
                    "other",     //其他
                    "net_cash_flow_n",     //经营活动产生的现金流量净额<附表>
                    "conv_debt_into_cap",     //债务转为资本
                    "financing_leased_fa",     //融资租入固定资产
                    "ending_balance_of_cash",     //现金的期末余额
                    "cash_beginning_balance",     //减:现金的期初余额
                    "ending_cash_eq",     //加:现金等价物的期末余额
                    "opening_cash_eq",     //减:现金等价物的期初余额
                    "incr_net_cash_eq",     //现金及现金等价物净增加额
                ],
                xpath:{
                    path:"//table[@class='table']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:77,
                        exclude:[2,3,16,27,42],
                        child:{
                            type:"group",
                            start:2,
                            end:5
                        }
                    }
                }
            }
        ]
    },
    general:{
        tags:[
            {
                name:"cash_flow",
                values:[
                    "date",
                    "cash_sale_services",     //销售商品、提供劳务收到的现金
                    "tax_refund",     //收到的税费返还
                    "other_cash_operating",     //收到的其他与经营活动有关的现金
                    "subtotal_cash_in_operating",     //经营活动现金流入小计
                    "cash_for_goods_services",     //购买商品、接受劳务支付的现金
                    "cash_for_employees",     //支付给职工以及为职工支付的现金
                    "various_taxes_paid",     //支付的各项税费
                    "other_pay",     //支付的其他与经营活动有关的现金
                    "subtotal_cash_out",     //经营活动现金流出小计
                    "net_cash_flow",     //经营活动产生的现金流量净额
                    "cash_from_investment",     //收回投资所收到的现金
                    "cash_investment_income",     //取得投资收益所收到的现金
                    "net_cash_assets",     //处置固定资产、无形资产和其他长期资产所收回的现金净额
                    "net_cash_subsidiaries",     //处置子公司及其他营业单位收到的现金净额
                    "other_cash_investment",     //收到的其他与投资活动有关的现金
                    "subtotal_cash_investment",     //投资活动现金流入小计
                    "cash_paid_assets",     //购建固定资产、无形资产和其他长期资产所支付的现金
                    "cash_paid_investment",     //投资所支付的现金
                    "net_cash_paid_subsidiaries",     //取得子公司及其他营业单位支付的现金净额
                    "other_cash_paid_investment",     //支付的其他与投资活动有关的现金
                    "subtotal_cash_out_investment",     //投资活动现金流出小计
                    "net_cash_flows_investing",     //投资活动产生的现金流量净额
                    "cash_received_investment",     //吸收投资收到的现金
                    "cash_received_ms",     //其中：子公司吸收少数股东投资收到的现金
                    "cash_received_loan",     //取得借款收到的现金
                    "cash_received_bonds",     //发行债券收到的现金
                    "cash_received_financing",     //收到其他与筹资活动有关的现金
                    "subtotal_cash_financing",     //筹资活动现金流入小计
                    "cash_paid_debt",     //偿还债务支付的现金
                    "cash_paid_dpp",     //分配股利、利润或偿付利息所支付的现金
                    "dp_paid_ms",     //其中：子公司支付给少数股东的股利、利润
                    "other_cash_out_financing",     //支付其他与筹资活动有关的现金
                    "subtotal_cash_out_financing",     //筹资活动现金流出小计
                    "net_cash_flow_financing",     //筹资活动产生的现金流量净额
                    "exchange_rate_cash",     //汇率变动对现金及现金等价物的影响
                    "net_increase_cash",     //现金及现金等价物净增加额
                    "cash_beginning",     //加:期初现金及现金等价物余额
                    "cash_end",     //期末现金及现金等价物余额
                    "net_profit",     //净利润
                    "ms_equity",     //少数股东权益
                    "uc_investment_loss",     //未确认的投资损失
                    "impairment_of_assets",     //资产减值准备
                    "depreciation_of_assets",     //固定资产折旧、油气资产折耗、生产性物资折旧
                    "amort_intangible_assets",     //无形资产摊销
                    "lt_deferred_exp_amort",     //长期待摊费用摊销
                    "reduction_deferred_expenses",     //待摊费用的减少
                    "incr_accrued_exp",     //预提费用的增加
                    "disposal_of_assets",     //处置固定资产、无形资产和其他长期资产的损失
                    "fx_asset_loss",     //固定资产报废损失
                    "loss_fair_value",     //公允价值变动损失
                    "deferred_income_increase",     //递延收益增加（减：减少）
                    "estimated_liabilities",     //预计负债
                    "financial_expenses",     //财务费用
                    "investment_loss",     //投资损失
                    "decr_def_inc_tax_assets",     //递延所得税资产减少
                    "incr_def_inc_tax_liab",     //递延所得税负债增加
                    "reduction_in_inventory",     //存货的减少
                    "decr_oper_receivables",     //经营性应收项目的减少
                    "incr_oper_payable",     //经营性应付项目的增加
                    "redc_comp_unsettle",     //已完工尚未结算款的减少(减:增加)
                    "incr_settle_unfinished",     //已结算尚未完工款的增加(减:减少)
                    "other",     //其他
                    "net_cash_flow_n",     //经营活动产生现金流量净额
                    "conv_debt_into_cap",     //债务转为资本
                    "conv_bonds_due_in_1year",     //一年内到期的可转换公司债券
                    "financing_leased_fa",     //融资租入固定资产
                    "ending_balance_of_cash",     //现金的期末余额
                    "cash_beginning_balance",     //现金的期初余额
                    "ending_cash_eq",     //现金等价物的期末余额
                    "opening_cash_eq",     //现金等价物的期初余额
                    "incr_net_cash_eq",     //现金及现金等价物的净增加额
                ],
                xpath:{
                    path:"//table[@class='table']//tr[{0}]//td[{1}]",
                    param:{
                        type:"value",
                        start:1,
                        end:78,
                        exclude:[2,3,14,27,44],
                        child:{
                            type:"group",
                            start:2,
                            end:5
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
                                name:"date"
                            }],
                            child:{
                                type: "group",
                                start: 2,
                                end: 6
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
                                end: 6
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
                                end: 6
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
                                end: 6
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
                                end: 6
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
                                end: 6
                            }
                        }
                    }
                }
            ]
        }
        return await digger(format(public.stock_guidline.url,code,year),options);
    },
    /**
     * @param {string} code 股票代码
     * @param {string} year 年份
     * @param {string} company_type 公司类型
     * @returns {json} 资产负债表
     */
    getBalanceSheet: async(code,year,company_type)=>{
        let options = balanceSheetOptions[company_type];
        return await digger(format(public.stock_balancesheet.url,code,year),options);
    },
    /**
     * @param {string} code 股票代码
     * @param {string} year 年份
     * @param {string} company_type 公司类型
     * @returns {json} 利润表
     */
    getProfitStatment: async(code,year,company_type)=>{
        let options=profitStatementOptions[company_type];
        return await digger(format(public.stock_profitstatement.url,code,year),options);
    },
    /**
     * @param {string} code 股票代码
     * @param {string} year 年份
     * @param {string} company_type 公司类型
     * @returns {json} 现金流量表
     */
    getCashFlowStatment: async(code,year,company_type)=>{
        let options=cashFlowOptions[company_type];
        return await digger(format(public.stock_cashflowstatement.url,code,year),options);
    }
}

module.exports = finance;