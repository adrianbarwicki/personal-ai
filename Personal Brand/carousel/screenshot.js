/**
 * Carousel screenshot exporter.
 *
 * Modes:
 *   node screenshot.js                   → render every carousel folder under ./
 *   node screenshot.js <folder>          → render a single carousel (e.g. `node screenshot.js never-50-50`)
 *
 * For each carousel:
 *   - opens <folder>/slides.html in headless Chromium
 *   - auto-discovers slides via `[id^="slide-"]` selector (no need to hard-code count)
 *   - exports PNG per slide at 2160×2700 (2× of 1080×1350) into <folder>/output/
 */
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const ROOT = __dirname;
const WIDTH = 1080;
const HEIGHT = 1350;

function listCarousels() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !["node_modules", "output"].includes(name))
    .filter((name) =>
      fs.existsSync(path.join(ROOT, name, "slides.html")),
    );
}

async function exportCarousel(browser, folder) {
  const slidesPath = path.join(ROOT, folder, "slides.html");
  const outputDir = path.join(ROOT, folder, "output");
  fs.mkdirSync(outputDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 2,
  });
  await page.goto(`file://${slidesPath}`, { waitUntil: "networkidle0" });

  const slideIds = await page.evaluate(() =>
    Array.from(document.querySelectorAll('[id^="slide-"]')).map((el) => el.id),
  );

  if (slideIds.length === 0) {
    console.warn(`⚠ ${folder}: no slides found`);
    await page.close();
    return;
  }

  console.log(`\n→ ${folder} (${slideIds.length} slides)`);
  for (const slideId of slideIds) {
    const element = await page.$(`#${slideId}`);
    if (!element) continue;
    const outputPath = path.join(outputDir, `${slideId}.png`);
    await element.screenshot({ path: outputPath });
    console.log(`  ✓ ${slideId}.png`);
  }

  await page.close();
}

(async () => {
  const target = process.argv[2];
  const carousels = target ? [target] : listCarousels();

  if (carousels.length === 0) {
    console.error("No carousels found.");
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: "new" });
  for (const folder of carousels) {
    await exportCarousel(browser, folder);
  }
  await browser.close();

  console.log(`\nDone. Rendered ${carousels.length} carousel(s).`);
})();
