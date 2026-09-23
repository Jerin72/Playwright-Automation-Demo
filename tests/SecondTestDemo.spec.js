import test from "@playwright/test";

test("second test",async ({browser})=>{
    const context2=await browser.newContext()
    const page2=await context2.newPage()
    await page2.goto("https://www.amazon.in/")
})

test.skip("third test",async ({browser})=>{
    const context3=await browser.newContext()
    const page3=await context3.newPage()
    await page3.goto("https://www.redbus.in/")
})

test("fourth test",async ({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")

})


//To run specific file use npx playwright test filename.spec.js
//test.only will only run that specific test
//skip will skip a particulat test and will run remaining