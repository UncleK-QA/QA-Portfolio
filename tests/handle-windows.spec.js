const {test, expect} = require("@playwright/test")


    test("Working with multiple tabs", async function ({browser}) {
        const context = await browser.newContext()

        const page = await context.newPage()

        await page.goto("https://freelance-learn-automation.vercel.app/login")

        const [newPage] = await Promise.all(
            
                          [
                                
                                context.waitForEvent('page'),

                                page.locator("(//a[contains(@href, 'facebook')])[1]").click()

                          ])
                      
             await newPage.locator("(//input[@name='email'])[2]").fill("ddonchi38@gmail.com")  
             
             await newPage.close()

             await page.locator("input[@name='email']").fill("obi.c.kingsley@gmail.com")
         
    })
