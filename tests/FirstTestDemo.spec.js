import test from "@playwright/test";

test("First Test Demo",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage()
    await page.goto("https://www.google.com/")
})