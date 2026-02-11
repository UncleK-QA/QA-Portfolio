const {test, expect} = require("@playwright/test")

//test.use({viewport:{width:850, height:610}})

test("Valid login", async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").fill("Admin", {delay: 1000})

    await page.getByPlaceholder("Password").fill("admin123", {delay: 700})

    await page.getByRole('button',{name: 'Login'}).click()

    await expect(page).toHaveURL(/.*dashboard.*/);

    await page.getByAltText("profile picture").first().click()

    await page.getByText('Logout').click()

})