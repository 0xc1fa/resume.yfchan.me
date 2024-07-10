// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   const fileUrl = `http://resume.yfchan.me`;

//   await page.goto(fileUrl, { waitUntil: "networkidle2" });
//   await page.pdf({ path: "out/Chan_Yat_Fu_Jacky.pdf", format: "A4" });

//   await browser.close();
// })();
const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');

// Step 1: Create and start the server using Express
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

// Serve static files from the 'out' directory
const rootDir = process.cwd();
const staticDir = path.resolve(rootDir, './out');
app.use(express.static(staticDir));
console.log(`Serving static files from: ${staticDir}`);

const server = app.listen(port, hostname, async () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  // Step 2: Generate the PDF using Puppeteer
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const fileUrl = `http://${hostname}:${port}/index.html`;

    await page.goto(fileUrl, { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'out/Chan_Yat_Fu_Jacky.pdf', format: 'A4' });

    await browser.close();
    console.log('PDF generated successfully.');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }

  // Step 3: Stop the server
  server.close(() => {
    console.log('Server stopped.');
  });
});
