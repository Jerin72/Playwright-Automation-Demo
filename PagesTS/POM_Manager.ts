import { LoginPage } from "./LoginPage";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { CheckOut } from "./CheckOut";
import { MsgCheck } from "./MsgCheck";  
import { Page } from "@playwright/test";


export class POM_Manager {

    page:Page
    login:LoginPage
    productpage:Product
    cart:Cart
    checkout:CheckOut
    msgcheck:MsgCheck

    constructor(page:Page) 
    {
        this.page=page
        this.login = new LoginPage(page)
        this.productpage = new Product(page)
        this.cart = new Cart(page)
        this.checkout = new CheckOut(page)
        this.msgcheck = new MsgCheck(page)

    }

    getloginpage()   //to returm login page object to main spec
    {
        return this.login
    }

    getproductpage()   //to returm product page object to main spec
    {
        return this.productpage
    }

    getcartpage()   //to returm cart page object to main spec
    {
        return this.cart
    }

    getcheckoutpage()   //to returm checkout page object to main spec
    {
        return this.checkout
    }   

    getmsgcheckpage()   //to returm checkout page object to main spec
    {
        return this.msgcheck
    }   


}