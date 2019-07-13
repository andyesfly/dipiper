/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *  股票列表、分类、发行等基础信息
 *--------------------------------------------------------------------------------------------*/
const public = require("./public");
const diger = require("../utils/diger");
const format = require('string-format');

let addPrefix = (code) => {
    let firstChar = code.charAt(0);
    return firstChar == "6"
        ? public.prefix.sh + code
        : public.prefix.sz + code;
}

let symbols = {
    getStockList: async() => {
        let result = [];
        for (let i = 1; i < 40; i++) {
            let list_str = await diger(format(public.stock_list.url, i));
            let lo = eval(list_str);
            if (!lo) 
                break;
            let tmp = lo.map(element => {
                let symbol = {
                    symbol: element.symbol,
                    code: element.code,
                    name: element.name
                }
                return symbol;
            });
            console.log(tmp);
            result = result.concat(tmp);
        }
        return result;
    },
    /**
     * @param {string} code 股票代码
     * @returns {json} 股票上市发行信息
     */
    getStockIssue: async(code) => {
        let options = {
            tags: [
                {
                    alias: [
                        "market",
                        "consignee",
                        "underwriting",
                        "sponsor",
                        "issue_price",
                        "issue_mode",
                        "issue_p/e",
                        "pre_capital",
                        "capital",
                        "issue_volume",
                        "expected_fundraising",
                        "fundraising",
                        "issue_cost",
                        "net_amount_raised",
                        "underwriting_fee",
                        "announcement_date",
                        "launch_date"
                    ],
                    xpath: "//div[@id='center']//tr[{}]//td[2]",
                    params: [
                        {
                            type: "enum",
                            start: 1,
                            end: 17
                        }
                    ]
                }
            ]
        }
        return await diger(format(public.stock_issue.url, code), options);
    },
    /**
     * @returns 行业板块列表
     */
    getIndustryList:async ()=>{
        let list_str = await diger(public.stock_board.url);
        let list_obj = eval(list_str);
        let industries = list_obj.filter(e=>e.key==="hsbroad")[0].next.filter(e=>e.key==="industry_board")[0].next;
        let result = industries.map(ele=>{
            let industry = {
                code: ele.key.split(".")[1],
                name: ele.title
            }
            return industry;
        })
        return result;
    },
    /**
     * @returns 概念板块列表
     */
    getConceptList: async ()=>{
        let list_str = await diger(public.stock_board.url);
        let list_obj = eval(list_str);
        let concepts = list_obj.filter(e=>e.key==="hsbroad")[0].next.filter(e=>e.key==="concept_board")[0].next;
        let result = concepts.map(ele=>{
            let concept = {
                code: ele.key.split(".")[1],
                name: ele.title
            }
            return concept;
        })
        return result;
    },
    /**
     * @returns 地域板块列表
     */
    getAreaList: async ()=>{
        let list_str = await diger(public.stock_board.url);
        let list_obj = eval(list_str);
        let concepts = list_obj.filter(e=>e.key==="hsbroad")[0].next.filter(e=>e.key==="region_board")[0].next;
        let result = concepts.map(ele=>{
            let concept = {
                code: ele.key.split(".")[1],
                name: ele.title
            }
            return concept;
        })
        return result;
    }
}

module.exports = symbols;