const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const fileUrl = `http://resume.yfchan.me`;

  await page.goto(fileUrl, { waitUntil: "networkidle2" });
  await page.pdf({ path: "out/Chan_Yat_Fu_Jacky.pdf", format: "A4" });

  await browser.close();
})();
