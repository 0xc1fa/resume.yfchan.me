const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const rootDir = process.cwd();

  const filePath = path.resolve(rootDir, "./out/index.html");
  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl, { waitUntil: "networkidle2" });
  await page.pdf({ path: "out/Chan_Yat_Fu_Jacky.pdf", format: "A4" });

  await browser.close();
})();
