import test, { expect } from "@playwright/test";

test("Form Submit",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const inputform=page.getByRole('link',{name:"Input Form"})
    await inputform.click()
    const formSubmit=page.getByRole('link',{name:"Form Submit"}).first()
    await formSubmit.click()
    await page.getByPlaceholder("First name").fill("ABC")  //using placeholder locator
    const lastname=page.locator("#validationCustom02")
    await lastname.fill("XYZ")
    //await page.getByPlaceholder("Last name").fill("XYZ")
    await page.locator("input[type='text'][id='validationCustomUsername']").fill("xyz@abc123")
    //await page.locator(".form-control#validationCustom03") //locationg using both
    await page.locator("input.form-control#validationCustom03").fill("HVGSHH") //using tag name
    await page.getByPlaceholder("State").fill("Kerala")
    await page.getByPlaceholder("Zip").fill("6737362")
    await page.locator(".form-check-input").check()
    await page.getByRole('button',{name:'Submit form'}).click()
    const msg=page.locator(".my-2")
    await expect(msg).toBeVisible()
    //await expect(msg).not.toBeVisible() //For negative scenarios use .not. with every method
    //using above line for below 3 steps
    const visiblemsg=await msg.isVisible()
    console.log(visiblemsg)
    await expect(visiblemsg).toBeTruthy()
    const msg1=await msg.textContent()
    console.log(msg1)
    //expect(msg1).toContain("submitted successfully!")   //to check if the substring is present in the string
    //expect(msg).toHaveText("Form has been submitted successfully!")  //to check if the text is present in the locator
    expect(msg).toHaveText(msg1)
    //expect(colormsg).toContain("Selected Color :"+color)
    //await page.pause()
})

//HOMEWORK
//CHECK IF THE MSG IS THERE OR NOT

//difference between toContain and toHaveText