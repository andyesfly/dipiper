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

let symbols = {
    getStockList: async() => {
        let result=[];
        for (let i = 1; i < 40; i++) {
            let list_str = await diger(format(public.stock_list.url,i));
            let lo = eval(list_str);
            if(!lo)
                break;
            let tmp = lo.map(element => {
                let symbol = {
                    symbol: element.symbol,
                    code: element.code,
                    name: element.name
                }
                return symbol;
            });
            result = result.concat(tmp);
        }
        return result;
    }
}

module.exports = symbols;