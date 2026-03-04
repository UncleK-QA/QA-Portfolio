const {test, expect } = require("@playwright/test")

 test("Select values from dropdown", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:"Goa"})

    //await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({value: "Himachal Pradesh"})

   // await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({index:4})

    await page.waitForTimeout(2000)

    const value = (await page.locator("#state option").allTextContents())

    console.log("The values includes:\n", value.join("\n"))

    await page.locator("#hobbies").selectOption(['Playing', 'Reading'])
    await page.waitForTimeout(3000)

    
 /*let state = await page.locator("$state")
 let allElements = await page.locator("option")

 for(let i=0; i<allElements.length; i++) 
   {
      let element = allElements[i]
      let value = await element.textContent()
      console.log("Value from dropdown using for loop", value)
   }
   */ 
 })
