/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const public = require("./public");
const diger = require("../utils/diger");
const scrubber = require("../utils/scrubber");
const format = require('string-format');

let trading={
    getMonthHis:async(code)=>{
        let his_str = await diger(format(public.stock_month_his.url,code));
        return scrubber.hisFormat(his_str);
    }
}

module.exports = trading;