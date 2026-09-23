import test from "@playwright/test";

test("multiple window2", async ({page,context})=>{

    await page.goto("https://selenium.qabible.in/window-popup.php")
    const likeusonfb_btn=page.getByRole("link",{name:"  Like us On Facebook "})
    const [childwindow]=await Promise.all(
    [context.waitForEvent("page"),
    await likeusonfb_btn.click()])
    await childwindow.waitForLoadState()
    const childtitle=await childwindow.title()
    console.log(childtitle)
    await childwindow.close()



})