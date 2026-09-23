import test from "@playwright/test";

test("File Download",async({page})=>{
    await page.goto("https://demo-qa-app.azurewebsites.net/upload-download")
    const downloadPromise=page.waitForEvent("download")
    const download=page.locator("#downloadButton")
    await download.click()
    const downloadfile=await downloadPromise
    await downloadfile.saveAs("C:/Users/Jerin Varghese/PlaywrightAutomation/Utils/download1.jpeg")
    await page.pause()
    
})

