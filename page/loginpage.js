const { expect } = require("@playwright/test")

class LoginPage
{

        constructor (page)
        {

            this.page = page
            this.header = "//h2[normalize-space()= 'Sign In']"
            this.username = "#email1"
            this.password = "#password1"
            this.loginButton = this.page.locator("button[type='submit']")

        }

        async verifyHeader()
        {

            await expect(this.page.locator(this.header)).toBeVisible()
        }

        async loginToApplication()
        {

            await this.page.fill(this.username, "admin@email.com")
            await this.page.fill(this.password, "admin@123")
            await this.loginButton.click()
        
        }
    
}

module.exports=LoginPage