import test from "@playwright/test";

test("First Test Demo",({browser})=>{
    const context1= await browser.newContext();
    const page1 =await context1.newPage()
    page1.goto("https://www.google.com/")
})