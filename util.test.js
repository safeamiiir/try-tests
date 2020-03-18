const puppeteer = require('puppeteer')
const { generateText, checkAndGenerate } = require("./util");

test("output title and price", () => {
  const text = generateText("Book", 29);
  expect(text).toBe("Book 29");
});

test("Check and generate input", () => {
  const text = checkAndGenerate("Book", 79);
  expect(text).toBe("Book 79");
});

test('clicked', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  })
  const page = await browser.newPage()
  await page.goto('http://127.0.0.1:8080/')
  await page.click('#title')
  await page.type('#title', 'Book')
  await page.click('#price')
  await page.type('#price', '79')
  await page.click('#add-product')
})