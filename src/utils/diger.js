/*---------------------------------------------------------------------------------------------
 *  Created on 2019-6-25
 *  Author: Hans Liu
 *  Contact: 35127884@qq.com
 *  Copyright (c) Hans Liu. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const puppeteer = require('puppeteer');
const format = require('string-format');
async function digger(url, options) {
    return await puppeteer
        .launch()
        .then(async browser => {
            const page = await browser.newPage();
            await page.goto(url);

            if (!options) {
                let r = await page.$$eval('pre', pre => pre[0].innerHTML);
                await browser.close();
                return r;
            } else {
                let tags = options.tags;
                let tag_values = {};
                for (i = 0; i < tags.length; i++) {
                    let xpath = tags[i].xpath;
                    let values = tags[i].values;
                    let vappend = "append" in xpath.param?xpath.param.append:[];
                    let value_groups = [];
                    tag_values[tags[i].name]=value_groups;

                    for (j = xpath.param.start; j < xpath.param.end; j++) {
                        if(xpath.param.exclude && xpath.param.exclude.indexOf(j)>=0)
                            continue;
                        let x = "";

                        if(xpath.param.type==="group"){
                            if(value_groups[j-xpath.param.start])
                                value_groups.push({});

                            if(vappend){
                                for(ai=0;ai<vappend.length;ai++){
                                    x=format(xpath.path,vappend[ai].index,k);
                                    let aphandles = await page.$x(x);
                                    for(ei=0;ei<aphandles.length;ei++){
                                        value_groups[j-xpath.param.start][vappend[ai].name] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                    }
                                }
                            }

                            if(xpath.param.child){
                                let pChild = xpath.param.child;
                                for(k=pChild.start;k<pChild.end;k++){
                                    
                                    x = format(xpath.path, j,k);
                                    let elehandles = await page.$x(x);
                                    for(ei=0;ei<elehandles.length;ei++){
                                        value_groups[j-xpath.param.start][values[j-xpath.param.start]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                    }
                                }
                            }
                            else{
                                if(!value_groups[0])
                                    value_groups.push({});
                                x = format(xpath.path,j);
                                let elehandles = await page.$x(x);
                                for(ei=0;ei<elehandles.length;ei++){
                                    value_groups[0][values[j-xpath.param.start]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                }
                            }
                        }
                        else{
                            if(xpath.param.child){
                                let pChild = xpath.param.child;
                                if(pChild.type ==="group"){
                                    for(k=pChild.start;k<pChild.end;k++){
                                        if(!value_groups[k-pChild.start])
                                            value_groups.push({});
                                        if(vappend){
                                            for(ai=0;ai<vappend.length;ai++){
                                                x=format(xpath.path,vappend[ai].index,k);
                                                let aphandles = await page.$x(x);
                                                for(ei=0;ei<aphandles.length;ei++){
                                                    value_groups[k-pChild.start][vappend[ai].name] = await page.evaluate(ele => ele.textContent,aphandles[ei]);
                                                }
                                            }
                                        }
                                        x = format(xpath.path, j,k);
                                        let elehandles = await page.$x(x);
                                        for(ei=0;ei<elehandles.length;ei++){
                                            value_groups[k-pChild.start][values[j-xpath.param.start]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                        }
                                    }
                                }
                                else{
                                    if(!value_groups[0])
                                        value_groups.push({});
                                    x = format(xpath.path,j);
                                    let elehandles = await page.$x(x);
                                    for(ei=0;ei<elehandles.length;ei++){
                                        value_groups[0][values[j-xpath.param.start]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                    }
                                }
                            }
                            else{
                                if(!value_groups[0])
                                    value_groups.push({});
                                x = format(xpath.path,j);
                                let elehandles = await page.$x(x);
                                for(ei=0;ei<elehandles.length;ei++){
                                    value_groups[0][values[j-xpath.param.start]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                }
                            }
                        }
                    }
                }
                
                await browser.close();
                return tag_values;
            }
        });
}
module.exports = diger;