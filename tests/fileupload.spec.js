const {test, expect} = require("@playwright/test")

test("Upload a File", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./uploads/image_1.jpg")

    await page.waitForTimeout(5000)

    await page.locator("#file-submit").click()

    expect (await page.locator("//h3")).toHaveText("File Uploaded!")
})