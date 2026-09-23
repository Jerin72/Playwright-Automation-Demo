import test from "@playwright/test";

test("File Upload",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    const browsefile=page.locator("#input-4")         //check if type is file
    await browsefile.setInputFiles("C:/Users/Jerin Varghese/PlaywrightAutomation/Utils/Vehicle_Record.xlsx")
    await page.pause()
})

test("Multiple File", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    const multipleupload=page.locator("#multipleFilesInput")
    await multipleupload.setInputFiles("C:/Users/Jerin Varghese/PlaywrightAutomation/Utils/Vehicle_Record.xlsx","C:/Users/Jerin Varghese/PlaywrightAutomation/Utils/Vehicle_Record - Copy.xlsx")
    const uploadbutton=page.getByRole("button",{name:'Upload Multiple Files'}).click
    await page.pause()
})

