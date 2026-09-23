export class Product{

    constructor(page)   //we won't use async in constructor so we will not use await here and we will use this. instead of const
    {
        this.page=page
        this.product_titles=page.locator(".inventory_item_name")
        this.product_count=page.locator(".inventory_item_name")
        this.cart=page.locator(".shopping_cart_link")
    }

    async productlist()
    {
        console.log(await this.product_titles.allTextContents())
        console.log(await this.product_count.count())
    }

    async addtocart(buy_product){

        //const buy_product='Sauce Labs Backpack
        console.log("Add to cart function")
        for(let i=0;i<await this.product_count.count();i++)
        {
            if(await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent()===buy_product)
            {
                //console.log(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").nth(i).textContent())                                                                             
                const addtocart=await this.page.locator(".inventory_item_description").nth(i).locator(".btn_inventory")
                console.log("Add to cart button is "+addtocart)
                await addtocart.click()
                
            }
        }
    }

    async clickcart()
    {
        await this.cart.click()
        console.log("clicked on cart")
    }



    
    
    
    
}