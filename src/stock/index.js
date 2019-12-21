/*---------------------------------------------------------------------------------------------
 *  Created on 2019-7-16
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *  行业、概念、地域指数及成分
 *--------------------------------------------------------------------------------------------*/
const public = require("../common/public");
const digger = require("../utils/digger");
const format = require('string-format');
const moment = require("moment");

let scrubber={
    formatHis:(hisData)=>{
        let his_obj = JSON.parse(hisData.substring(hisData.indexOf("(")+1,hisData.length-2));
        let result = his_obj.data.klines.map(ele=>{
            let kline = ele.split(",");
            return {
                date:kline[0],
                open:kline[1],
                close:kline[2],
                high:kline[3],
                low:kline[4],
                volume:kline[5],
                amount:kline[6],
                swing:kline[7]
            }
        });
        return result;
    },
    formatEle:(hisData)=>{
        let his_obj = JSON.parse(hisData.substring(hisData.indexOf("(")+1,hisData.length-2));
        let result = his_obj.data.diff.map(ele=>{
            return {
                code:ele.f12,
                name:ele.f14
            }
        });
        return result;
    }
}

let index = {
    /**
     * @param {code} 行业、概念、地域板块代码
     */
    getMonthHis: async (code)=>{
        let endDate = moment().format("YYYYMMDD");
        let his_str = await digger(format(public.stock_boardk.url,code,public.stock_boardk.lt.month,endDate));
        return scrubber.formatHis(his_str);
    },
    /**
     * @param {code} 行业、概念、地域板块代码
     */
    getWeekHis: async (code)=>{
        let endDate = moment().format("YYYYMMDD");
        let his_str = await digger(format(public.stock_boardk.url,code,public.stock_boardk.lt.week,endDate));
        return scrubber.formatHis(his_str);
    },
    /**
     * @param {code} 行业、概念、地域板块代码
     */
    getDailyHis: async (code)=>{
        let endDate = moment().format("YYYYMMDD");
        let his_str = await digger(format(public.stock_boardk.url,code,public.stock_boardk.lt.day,endDate));
        return scrubber.formatHis(his_str);
    },
    /**
     * @param {code} 行业、概念、地域板块代码
     */
    getComponents: async (code)=>{
        let his_str = await digger(format(public.stock_boardele.url,code));
        return scrubber.formatEle(his_str);
    }
}

module.exports = index;