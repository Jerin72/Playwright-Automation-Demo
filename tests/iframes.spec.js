import test from "@playwright/test";

test("iframe",async ({page})=>
{

    await page.goto("https://demo-qa-app.azurewebsites.net/frames")
    const iframe=page.frameLocator("#frame1")   //to locate frame,we use frameLocator
    const heading=await iframe.locator("#sampleHeading").textContent()
    console.log(heading)

    await page.waitForTimeout(3000)
}
)