const {test, expect} = require("@playwright/test")

test("Handle frames", async function ({page}) {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

   const Mainframe = await page.frameLocator("//frame[@name='classFrame']")

    await Mainframe.locator("//a[text()='java.applet']").click() 

    await page.pause()
    
})