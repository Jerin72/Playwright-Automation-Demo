import test, { expect } from "@playwright/test";

test("Dropdown",async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const inputform=page.getByRole('link',{name:"Input Form"})
    await inputform.click()
    const selectInput=page.getByRole('link',{name:"Select Input"})
    await selectInput.click()
    const sropdown=page.locator(".form-control").first().click()  //using class locator
    //const selectOption=page.locator("#single-input-field")  //using id locator
    //await selectOption.selectOption("Red")
    ////locator chaining or parent to child locator
    const parent=page.locator(".card-body").first()
    const child=parent.locator("#single-input-field")
    await child.selectOption("Red")
    const color=await child.inputValue()
    console.log(color)
    const selectedColor=page.locator("#message-one")
    const colormsg=await selectedColor.textContent() //fetches the message in that location
    console.log(colormsg)
    expect(colormsg).toContain("Selected Color : "+color)  //assertion to check if the color is present in the message
    //await page.pause()
})