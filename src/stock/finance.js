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
}

module.exports = finance;