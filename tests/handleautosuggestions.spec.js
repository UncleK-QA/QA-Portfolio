const {test, expect} = require("@playwright/test")

test("Verify Application Title Using Keyboard", async function ({page}) {
    
    await page.goto("https://www.wikipedia.org/")

    await page.locator("input[accesskey='F']").type("Ebube Obi")

    await page.waitForSelector('.suggestion-link')

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")
    

})

test("Verify Application title using for loop", async function ({page}) {

    await page.goto("https://www.wikipedia.org/")

    await page.locator("input[accesskey='F']").type("Kingsley Obi")

    await page.waitForSelector(".suggestion-link")

    const elements = await page.$$(".suggestion-link")

    for(let i=0; i<elements.length; i++)
    {
        const text = await elements[i].textContent()

        if(text.includes("Ben-Adir"))
        {
            await elements[i].click()
            break
        }
    }
    
})