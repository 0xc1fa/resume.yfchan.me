const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Resolve the relative path to the index.html
  const filePath = path.resolve(__dirname, "./Chan_Yat_Fu_Jacky.html");
  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl, { waitUntil: "networkidle2" });
  await page.pdf({ path: "out/Chan_Yat_Fu_Jacky.pdf", format: "A4" });

  await browser.close();
})();
