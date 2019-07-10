/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const puppeteer = require('puppeteer');
const format = require('string-format');
async function diger(url, options) {
    return await puppeteer
        .launch()
        .then(async browser => {
            const page = await browser.newPage();

            // page.on('request', async req => {     if (req.resourceType() === 'xhr') {
            //     console.log(req.url());     } });
            await page.goto(url);
            // await page.content().then((v)=>{   console.log(v); })
            if (!options) {
                let r = await page.$$eval('pre', pre => pre[0].innerHTML);
                let ro = eval(r);
                await browser.close();
                return r;
            } else {
                let tags = options.tags;
                let result = [];
                for (i = 0; i < tags.length; i++) {
                    let params = tags[i].params;
                    let tagValues = {};
                    for (j = 0; j < params.length; j++) {
                        if (params[j].type === "enum") {
                            for (k = params[j].start; k <= params[j].end; k++) {
                                let aliasIndex = k - params[j].start;
                                let xpath = format(tags[i].xpath, k);
                                var elehandles = await page.$x(xpath);
                                for(ei=0;ei<elehandles.length;ei++){
                                    tagValues[tags[i].alias[aliasIndex]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                }
                            }
                        }
                    }
                    result.push(tagValues);
                }
                
                await browser.close();
                return result;
            }
            // console.log(r); other actions...
            // await browser.close();
        });
}
module.exports = diger;