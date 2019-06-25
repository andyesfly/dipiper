const puppeteer = require('puppeteer');
async function diger(url) {
    return await puppeteer
        .launch()
        .then(async browser => {
            const page = await browser.newPage();

            // page.on('request', async req => {
            //     if (req.resourceType() === 'xhr') {
            //         console.log(req.url());
            //     }
            // });
            await page.goto(url);
            // await page.content().then((v)=>{   console.log(v); })
            let r = await page.$$eval('pre', pre => pre[0].innerHTML);
            let ro = eval(r);
            return r;
            // console.log(r);
            // other actions...
            // await browser.close();
        });
}
module.exports = diger;