import { expect } from "@playwright/test"

export class MsgCheck
{
    constructor(page)
    {
        this.page=page
        this.msg1=page.locator(".complete-header")

    }

    async validateMsgUrl()
    {
        const msg=await this.msg1.textContent()
        console.log(msg)
        expect(msg).toBe("Thank you for your order!")

        expect(this.page.url()).toContain("https://www.saucedemo.com/checkout-complete.html")

    }
}


    
    

    