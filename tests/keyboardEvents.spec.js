const {test, expect} = require("@playwright/test")

test("Keyboard Events in Playwright", async function ({page}) {

    await page.goto("https://www.wikipedia.org/")

     const search = page.locator("input[accesskey='F']")

    await search.fill("Kingsley Obi")

    await search.press("Control+A")

    await search.press("Control+X")

    await search.press("Control+V")

    await expect(search).toHaveValue("Kingsley Obi")

    await page.keyboard.press("Enter")
    
})