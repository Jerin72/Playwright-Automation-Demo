import test, { expect } from "@playwright/test";
import {customtest} from "../Utils/LoginCustom"
import {mytest} from "../Utils/SampleCustom"
import {logintest} from "../Utils/TestLogin"

test.skip("Demo Project", async ({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const userid = await page.getByPlaceholder("Username")
    await userid.fill("standard_user")
    const password = await page.getByPlaceholder("Password")
    await password.fill("secret_sauce")
    await page.locator("#login-button").click()

    const product_titles=await page.locator(".inventory_item_name").allTextContents()
    console.log(product_titles)
    const product_count=await page.locator(".inventory_item_name").count()
    console.log(product_count)

    const buy_product='Sauce Labs Backpack'
    for(let i=0;i<product_count;i++)
    {
        if(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent()===buy_product)
        {
            //console.log(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").nth(i).textContent())                                                                             
            const addtocart=await page.locator(".inventory_item_description").nth(i).locator(".btn_inventory")
            await addtocart.click()
        }
    }

    const cart=await page.locator(".shopping_cart_link")
    await cart.click()

    const cart_product_name=await page.locator(".inventory_item_name").textContent()
    console.log(cart_product_name)
    expect(cart_product_name).toBe(buy_product)

    const checkout=await page.locator("#checkout")
    await checkout.click() 

    const firstname=page.getByPlaceholder("First Name")
    const lastname=page.getByPlaceholder("Last Name")
    const postalcode=page.getByPlaceholder("Zip/Postal Code")
    await firstname.fill("Jerin")
    await lastname.fill("Varghese")
    await postalcode.fill("12345")

    const continuebtn= page.locator("#continue")
    await continuebtn.click()

    const finishbtn= page.locator("#finish")
    await finishbtn.click()

    const msg=await page.locator(".complete-header").textContent()
    console.log(msg)
    expect(msg).toBe("Thank you for your order!")

    expect(page.url()).toContain("https://www.saucedemo.com/checkout-complete.html")

    await page.waitForTimeout(3000)

})


// customtest.skip("Custom Test Sample" +user, async ({page,logindata})=>
// {
//     await page.goto("https://www.saucedemo.com/")
//     const userid = await page.getByPlaceholder("Username")
//     await userid.fill(logindata.validusername)
//     const password = await page.getByPlaceholder("Password")
//     await password.fill(logindata.validpassword)
//     await page.locator("#login-button").click()

// })

/*
mytest("Sample Custom Mytest",async ({page,userlist})=>{
    for(const user of userlist){
    await page.goto("https://www.saucedemo.com/")
    const userid = await page.getByPlaceholder("Username")
    await userid.fill(user.validusername)
    const password = await page.getByPlaceholder("Password")
    await password.fill(user.validpassword)
    await page.locator("#login-button").click()
    }

})
*/

logintest("Locator Custom Test",async ({page,loginfixture})=>{
    await loginfixture("standard_user","secret_sauce")
})



