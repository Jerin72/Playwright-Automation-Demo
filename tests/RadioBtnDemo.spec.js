import {test,expect} from "@playwright/test";

test("RadioButton Demo",async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.locator('[href="simple-form-demo.php"]').click()
    const radioLink=page.locator('[href="radio-button-demo.php"]')
    await radioLink.click()
//radiobutton,button,link,alertbox getByRole
    const radioBtn=page.getByRole('radio',{name:"Male"}).first()//radio is the type and Male is the value
    await radioBtn.click()
    const value=await radioBtn.isChecked()
    console.log(value)
    await expect(value).toBe(true)
    await expect(radioBtn).toBeChecked()
    //await page.pause()
})