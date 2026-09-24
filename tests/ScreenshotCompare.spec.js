import test, { expect } from "@playwright/test";

test("Screenshot", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.screenshot({path:"home.png"})
    const inputform=page.getByRole('link',{name:"Input Form"})
    await inputform.screenshot({path:"input.png"})
})

test("Visual Comparision", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    //await page.goto("https://demoqa.com/upload-download")
    await expect(page).toHaveScreenshot("screen2.png")   //first time it will fail but at the same time it will take a screenshot

})