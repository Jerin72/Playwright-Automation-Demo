import test from "@playwright/test";

test("@web Drag and Drop Demo", async ({ page }) => {

    await page.goto("https://selenium.qabible.in/drag-drop.php")

    const startpoint = page.getByText("Draggable n°1")
    await startpoint.hover()
    await page.waitForTimeout(3000)
    const targetpoint = page.locator("#mydropzone")
    await startpoint.dragTo(targetpoint)
    await page.pause()
    //await page.waitForTimeout(3000)

})