import test from "@playwright/test";

test("Alert Modal",async ({page}) => {
    await page.goto("https://selenium.qabible.in/")
    await page.locator("#alert-modal").click()
    const bootstrapmodal=await page.getByRole('link',{name:"Bootstrap Modal"})
    await bootstrapmodal.click()
    const launchbtn=page.locator(".btn.btn-primary").first()
    await launchbtn.click()
    //const modal=page.getByRole("document")
    const Savechangesbtn=page.getByRole('button',{name:"Save changes"})
    await Savechangesbtn.click()
    const Closebtn=page.getByRole('button',{name:"Close"}).nth(1)
    await Closebtn.click()
    //await page.pause()

})




    

    