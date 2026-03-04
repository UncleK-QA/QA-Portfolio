const {test, expect} = require("@playwright/test")

test ("Handle Alerts", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async function (d) {

        expect(d.type()).toContain("alert")

        expect(d.message()).toContain("I am a JS Alert")
       
        await d.accept()
        
    })

    await page.locator("//button[text()='Click for JS Alert']").click()

})

test ("Handle Confirm Box", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async function (dialogWindow) {

        expect(dialogWindow.type()).toContain("confirm")

        expect(dialogWindow.message()).toContain("I am a JS Confirm")

        await page.waitForTimeout(2000)

        //await dialogWindow.accept()

        await dialogWindow.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()
    
})

test ("Handle Prompt Box", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async function (dialogWindow) {

        expect(dialogWindow.type()).toContain("prompt")

        expect(dialogWindow.message()).toContain("I am a JS prompt")
        
        await dialogWindow.accept("Ebube Obi")
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

    await page.waitForTimeout(4000)
    
})