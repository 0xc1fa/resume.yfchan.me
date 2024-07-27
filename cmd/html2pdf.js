#! node

const express = require("express");
const path = require("path");
const puppeteer = require("puppeteer");

const app = express();
const port = 3003;
const hostname = "127.0.0.1";

const rootDir = process.cwd();
const staticDir = path.resolve(rootDir, "./out");

app.use(express.static(staticDir));
console.log(`Serving static files from: ${staticDir}`);

const server = app.listen(port, hostname, async () => {
	console.log(`Server running at http://${hostname}:${port}/`);

	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		const fileUrl = `http://${hostname}:${port}/index.html`;

		await page.goto(fileUrl, { waitUntil: "networkidle2" });
		await page.pdf({ path: "out/Chan_Yat_Fu_Jacky.pdf", format: "A4" });

		await browser.close();
		console.log("PDF generated successfully.");
	} catch (error) {
		console.error("Error generating PDF:", error);
	}

	server.close(() => {
		console.log("Server stopped.");
	});
});
