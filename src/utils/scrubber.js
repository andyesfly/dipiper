/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
        return result;
    }
}

module.exports = scrubber;