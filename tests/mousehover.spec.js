const {test, expect} = require ("@playwright/test")

test("Valid Login", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").fill("obi.c.kingsley@gmail.com")

    await page.getByPlaceholder("Enter Password").fill("unclek38")

    await page.getByRole("button", {name:"Sign in"}).click()

    await page.getByRole("img", {name: "menu"}).click()
    
    await page.getByText("Practise").click()

    await page.waitForTimeout(5000)

    
})