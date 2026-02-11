const {test, expect } = require("@playwright/test")
const { error } = require("node:console")

test("Verify Error Message", async function({page}) {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admnu88438");

    await page.getByRole('button', {name: 'Login'}).click();

    const error = await page.locator("//p[contains(@class, 'oxd-alert-content-text')]")

    await expect(error).toBeVisible()

    const message = await error.textContent()

    console.log("Error message is ", message);

    expect(message.includes("Invalid")).toBeTruthy()
    expect(message.includes("Invalid credentials")).toBeTruthy()
})