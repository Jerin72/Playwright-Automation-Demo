import { Locator, Page } from "@playwright/test"

export class CheckOut
{
    page:Page
    firstname:Locator
    lastname:Locator
    postalcode:Locator
    continuebtn:Locator
    finishbtn:Locator

    constructor(page:Page)
    {
        this.page=page
        this.firstname=page.getByPlaceholder("First Name")
        this.lastname=page.getByPlaceholder("Last Name")
        this.postalcode=page.getByPlaceholder("Zip/Postal Code")
        this.continuebtn= page.locator("#continue")
        this.finishbtn= page.locator("#finish")
    }

    async fillInfo(fname:string,lname:string,zip:string)
    {
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.postalcode.fill(zip)
    }

    async finish()
    {
        await this.continuebtn.click()
        await this.finishbtn.click()
    }

}



    

    
    

    
   