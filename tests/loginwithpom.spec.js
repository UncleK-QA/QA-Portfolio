const {test, expect} = require("@playwright/test")
const LoginPage = require("../page/loginpage")
const HomePage = require("../page/homepage")

test("Login application with POM", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginpage = new LoginPage(page)

    await loginpage.loginToApplication()
    
    const homepage = new HomePage(page)

    await homepage.verifymanageoption()

    await homepage.logoutFromApplication()

    await loginpage.verifyHeader()
})