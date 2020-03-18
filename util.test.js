const { generateText, checkAndGenerate } = require("./util");

test("output title and price", () => {
  const text = generateText("Book", 29);
  expect(text).toBe("Book 29");
});

test("Check and generate input", () => {
  const text = checkAndGenerate("Book", 79);
  expect(text).toBe("Book 79");
});
