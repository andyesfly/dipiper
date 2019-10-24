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
                    let vappend = "append" in xpath.param?xpath.param.append:undefined;
                    let value_groups = [];
                    tag_values[tags[i].name]=value_groups;

                    let j_dec=0;
                    for (j = xpath.param.start; j < xpath.param.end; j++) {
                        if(xpath.param.exclude && xpath.param.exclude.indexOf(j)>=0){
                            j_dec++;
                            continue;                            
                        }
                        let x = "";

                        if(xpath.param.type==="group"){
                            let group_index = j-xpath.param.start-j_dec;
                            if(value_groups[group_index])
                                value_groups.push({});

                            if(vappend){
                                for(ai=0;ai<vappend.length;ai++){
                                    x=format(xpath.path,vappend[ai].index,j);
                                    let aphandles = await page.$x(x);
                                    for(ei=0;ei<aphandles.length;ei++){
                                        value_groups[group_index][vappend[ai].name] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                    }
                                }
                            }

                            if(xpath.param.child){
                                let pChild = xpath.param.child;
                                let k_dec=0;
                                for(k=pChild.start;k<pChild.end;k++){
                                    if(pChild.exclude && pChild.exclude.indexOf(k)>=0){
                                        k_dec++;
                                        continue;
                                    }
                                    let value_index = k=pChild.start-k_dec;
                                    x = format(xpath.path, k,j);
                                    let elehandles = await page.$x(x);
                                    for(ei=0;ei<elehandles.length;ei++){
                                        value_groups[group_index][values[value_index]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                    }
                                }
                            }
                            else{
                                if(!value_groups[0])
                                    value_groups.push({});
                                let value_index = j-xpath.param.start-j_dec;
                                x = format(xpath.path,j);
                                let elehandles = await page.$x(x);
                                for(ei=0;ei<elehandles.length;ei++){
                                    value_groups[0][values[value_index]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                }
                            }
                        }
                        else{
                            let value_index = j-xpath.param.start-j_dec;
                            if(xpath.param.child){
                                let pChild = xpath.param.child;

                                if(pChild.type ==="group"){
                                    let k_dec=0;
                                    for(k=pChild.start;k<pChild.end;k++){
                                        if(pChild.exclude && pChild.exclude.indexOf(k)>=0){
                                            k_dec++;
                                            continue;
                                        }
                                        let group_index = k-pChild.start-k_dec;
                                        if(!value_groups[group_index])
                                            value_groups.push({});
                                        if(vappend){
                                            for(ai=0;ai<vappend.length;ai++){
                                                x=format(xpath.path,vappend[ai].index,k);
                                                let aphandles = await page.$x(x);
                                                for(ei=0;ei<aphandles.length;ei++){
                                                    value_groups[group_index][vappend[ai].name] = await page.evaluate(ele => ele.textContent,aphandles[ei]);
                                                }
                                            }
                                        }
                                        
                                        x = format(xpath.path, j,k);
                                        let elehandles = await page.$x(x);
                                        for(ei=0;ei<elehandles.length;ei++){
                                            value_groups[group_index][values[value_index]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                        }
                                    }
                                }
                                else{
                                    if(!value_groups[0])
                                        value_groups.push({});
                                    x = format(xpath.path,j);
                                    let elehandles = await page.$x(x);
                                    for(ei=0;ei<elehandles.length;ei++){
                                        value_groups[0][values[value_index]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                    }
                                }
                            }
                            else{
                                if(!value_groups[0])
                                    value_groups.push({});
                                x = format(xpath.path,j);
                                let elehandles = await page.$x(x);
                                for(ei=0;ei<elehandles.length;ei++){
                                    value_groups[0][values[value_index]] = await page.evaluate(ele => ele.textContent,elehandles[ei]);
                                }
                            }
                        }
                        if(JSON.stringify(value_groups[value_groups.length-1]) == "{}")
                            value_groups.pop();
                    }
                }
                
                await browser.close();
                return tag_values;
            }
        });
}
module.exports = digger;