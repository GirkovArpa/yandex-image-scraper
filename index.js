'use strict';

(async () => {
  const puppeteer = require('puppeteer-core');
  const browser = await puppeteer.launch({
    defaultViewport: null,
    headless: false,
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--disable-features=IsolateOrigins,site-per-process']
  });
  let page;
  [page] = await browser.pages();
  await page.goto(`https://yandex.com/images/search?text=foxes`);
  let items = await page.evaluate(() => [...document.querySelectorAll('.serp-item')].map(node => JSON.parse(node.attributes['data-bem'].textContent)['serp-item'].img_href));
  console.log(items);
})();