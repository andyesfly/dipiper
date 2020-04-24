/*---------------------------------------------------------------------------------------------
 *  Created on 2020-4-24
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 * 资金流向数据
 *--------------------------------------------------------------------------------------------*/
const public = require("../common/public");
const digger = require("../utils/digger");
const format = require("string-format");
const moment = require("moment");

let fundflow = {
    /**
     *  @method
     *  @param {string} code 股票代码
     * 	@returns {json} 个股资金流向历史记录
     */
    getStockTrendHis: async (code) => {
        let rec_num = await digger(format(public.stock_fundflow.num_url, code));
        let list_obj = await digger(format(public.stock_fundflow.url, eval(rec_num), code));
        return {
            code: code,
            date: eval(list_obj)
        };
    }
};

module.exports = fundflow;
