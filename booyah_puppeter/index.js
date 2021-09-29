const puppeteer = require('puppeteer');
const { sleep } = require('./utils');

const run = async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/channels/90037022.html');
    // await page.screenshot({ path: 'example.png' });

    // await browser.close();
};

const runAll = async () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        run();
        await sleep(5000);
    }
};

runAll();
