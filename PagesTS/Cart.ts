import { expect, Locator, Page } from "@playwright/test"


export class Cart{

    cart_product_locator:Locator
    checkout:Locator
   
    constructor(page:Page)
    {

        this.cart_product_locator=page.locator(".inventory_item_name")
        //console.log(this.cart_product_locator)
        this.checkout=page.locator("#checkout")

    }
    async validateCartProduct(buy_product:string)
    {
        console.log("inside validateCartProduct")
        const cart_product_name=await this.cart_product_locator.textContent()
        console.log(cart_product_name)
        expect(cart_product_name).toBe(buy_product)
    }

    async checkOut()
    {
        await this.checkout.click()
    }


}
