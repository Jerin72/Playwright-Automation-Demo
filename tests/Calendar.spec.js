import test, { expect } from "@playwright/test";

test("Date Picker Calendar",async ({page}) => {
    await page.goto("https://selenium.qabible.in/date-picker.php")
    await page.locator(".form-control.datepicker").click()
    await page.locator(".datepicker-days th.datepicker-switch").click()     //.PAREMTCALSS TAGNAME.CHILDLOCTAOR
    await page.locator(".datepicker-months th.datepicker-switch").click()
    
    const targetyear=2035   
    const targetmonth=7
    const targetdate=13
    while(true)
    {
    const yearrange=await page.locator(".datepicker-years th.datepicker-switch").textContent()
    console.log(yearrange)
    const startyear=await yearrange.split("-")[0]
    console.log(startyear)
    const endyear=await yearrange.split("-")[1]
    console.log(endyear)
    if(targetyear>=startyear && targetyear<=endyear){
        break
    }
    if(targetyear<startyear){
        //click on previous button
        await page.locator(".datepicker-years th.prev").click()
    }
    else
    {
        //click on next button
        await page.locator(".datepicker-years th.next").click()
    }
    }
    
    //await page.getByText(targetyear.toString(), {exact: true}).first().click()     //toString -- number to String
    await page.locator(".datepicker-years .year", {hasText: targetyear.toString()}).click()
    await page.locator(".month").nth(targetmonth-1).click()
    await page.locator(".datepicker-days .day", {hasText: targetdate.toString()}).click()
    //await page.getByText(targetdate.toString(), {exact: true}).click()
    //AWAIT PAGE.GETBYTEXT("1996",{exact:true}).FIRST().CLICK()  //toString -- number to String
    await page.locator(".btn.btn-primary").first().click()
    const msg1=await page.locator(".my-2").first()
    console.log("Selected Date is", await msg1.textContent())
    await expect(msg1).toHaveText("Date : 13/07/2035")  // toContain can be used to check if the substring is present in the string

    //await page.pause()
    })