import {test,expect} from "@playwright/test";   //import assertion

test("Locator Test",async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    //CSS Selector
    await page.locator('[href="simple-form-demo.php"]').click()  //using attribute
    //await page.locator(".nav-link").nth(1).click()       //using class
    await page.locator("#single-input-field").fill("Hai All")  //using id
    await page.pause()  //playwright inspector will come. We need to give resume in playwright inspector to continue  
})

//use CTRL+F to check the uniqueness of locator in developer tool.If the count is maximum 2 we can use it.
//strict mode volation is thrown when the element is not unique

//test for double click 
test("Double Click",async ({page})=>{
    await page.goto("https://selenium.qabible.in/check-box-demo.php")
    const checkbox=await page.locator(".form-check-label").first()  //for assertion
    await checkbox.check()
    await page.waitForTimeout(3000)
    //await checkbox.dblclick()   //double click
    //await page.waitForTimeout(3000)
    //await checkbox.click({clickCount:3})  //click 3 times
    await checkbox.click({button:"right"})  //right click
    await page.waitForTimeout(3000)

}
)

//test to use xpath
test("Checkbox Locator",async ({page})=>{
    await page.goto("https://selenium.qabible.in/check-box-demo.php")
    //await page.locator(".nav-link").nth(1).click()
    //await page.locator('//a[@href="check-box-demo.php"]').click()  
    //attribute[@tagname=value]
    //await page.locator(".form-check-label").first().click()
    //await page.locator(".form-check-label").first().check()
    const checkbox=await page.locator(".form-check-label").first()  //for assertion
    await checkbox.check()
    await page.waitForTimeout(3000)
    const isCheck=await checkbox.isChecked()  //to print true or false
    console.log(isCheck)
    await expect(isCheck).toBeTruthy()   //value must be true
    
    await checkbox.uncheck()
    const isCheck1=await checkbox.isChecked()
    console.log(isCheck1)
    await expect(isCheck1).toBeFalsy()
    await expect(checkbox).not.toBeChecked()  //checkbox assertion
    await page.pause()
})

