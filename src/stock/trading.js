/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const public = require("../common/public");
const digger = require("../utils/digger");
const format = require('string-format');
const moment = require("moment");

let scrubber={
    hisFormat:(hisData)=>{
        let tmp = eval(hisData);
        let candles = tmp.split('\n');
        let result = candles.map(element=>{
            if(element==="")
                return;
            let candle = element.split(" ");
            if(candle[0].substr(0,1)==="9")
                candle[0] = "19"+candle[0];
            else
                candle[0] = "20"+candle[0];
            let date = moment(candle[0]).format("YYYY-MM-DD");
            return {
                date:date,
                open:candle[1],
                close:candle[2],
                high:candle[3],
                low:candle[4],
                volume:candle[5]
            }
        });
        result.shift();
        result.pop();
        return result;
    },
    minFormat:(minData)=>{
        let tmp = eval(minData);
        let candles = tmp.split('\n');
        let date_str = "20"+candles.slice(1,2)[0].substr(5); 
        let result = candles.map(element=>{
            if(element==="" || element.indexOf("date")>-1)
                return;
            let candle = element.split(" "); 
            return {
                date:date_str+candle[0],
                price:candle[1],
                volume:candle[2]
            }
        });
        result.shift();
        result.shift();
        result.pop();
        return result;
    }
}

let trading={
    getMonthHis:async(code)=>{
        let his_str = await digger(format(public.stock_month_his.url,code));
        return scrubber.hisFormat(his_str);
    },
    getWeekHis:async(code)=>{
        let his_str=await digger(format(public.stock_week_his.url,code));
        return scrubber.hisFormat(his_str);
    },
    getDailyHis:async(year,code)=>{
        let his_str=await digger(format(public.stock_daily_his.url,year,code));
        return scrubber.hisFormat(his_str);
    },
    getMin:async(code)=>{
        let min_str = await digger(format(public.stock_min.url,code));
        return scrubber.minFormat(min_str);
    }
}

module.exports = trading;