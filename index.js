const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://opensea.io/collection/cosmodinos-alpha');

    const socialLinks = await page.$$('.styles__StyledLink-sc-l6elh8-0.ekTmzq.Blockreact__Block-sc-1xf18x6-0.Buttonreact__StyledButton-sc-glfma3-0.bhqEJb.kdWcfm.ButtonGroupreact__StyledButton-sc-1skvztv-0.eztnHW');

    const linksList = [];

    for (let i = 0; i < socialLinks.length; i++) {
        const link = await (await socialLinks[i]
        .getProperty('href')).
        jsonValue();
        linksList.push(link);
    };

    console.log(linksList);

    // const collectionImage = await page.evaluate(() => {

    // });

    await browser.close();
})();



// todo:
// 1. get url for social links
// 2. make data availabel for users
// 3. 