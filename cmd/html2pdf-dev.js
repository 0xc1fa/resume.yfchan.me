#! node
const puppeteer = require("puppeteer");

const port = 3000;
const hostname = "127.0.0.1";

async function main() {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		const fileUrl = `http://${hostname}:${port}`;

		await page.goto(fileUrl, { waitUntil: "networkidle2" });
		await page.pdf({ path: "out/Chan_Yat_Fu_Jacky.pdf", format: "A4" });

		await browser.close();
		console.log("PDF generated successfully.");
	} catch (error) {
		console.error("Error generating PDF:", error);
	}
}

main();
