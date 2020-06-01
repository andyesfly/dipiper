/*---------------------------------------------------------------------------------------------
 *  Created on 2020-6-1
 *  Author: Joik gao
 *  Contact: 757662724@qq.com
 *  Copyright (c) Joik gao. All rights reserved.
 *  Licensed under the GPL-3.0 License. See License.txt in the project root for license information.
 *  获取个股分红数据
 *--------------------------------------------------------------------------------------------*/
const public = require("../common/public");
const puppeteer = require("puppeteer");
const format = require("string-format");

const getAllotProfit = async (code) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(format(public.stock_allot_profit.url, code));
  const res = await page.$$eval("#sharebonus_1 tbody tr", (els) =>
    els.map((el) => {
      const tds = el.querySelectorAll("td");
      const tdVal = [];
      for (let index = 0; index < tds.length; index++) {
        const elt = tds[index];
        if (elt.innerText !== "查看") {
          tdVal.push(elt.innerText);
        }
      }
      return tdVal;
    })
  );
  return res;
};

module.exports = { getAllotProfit };
