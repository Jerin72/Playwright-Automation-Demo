export class CheckOut
{
    constructor(page)
    {
        this.page=page
        this.firstname=page.getByPlaceholder("First Name")
        this.lastname=page.getByPlaceholder("Last Name")
        this.postalcode=page.getByPlaceholder("Zip/Postal Code")
        this.continuebtn= page.locator("#continue")
        this.finishbtn= page.locator("#finish")
    }

    async fillInfo(fname,lname,zip)
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



    

    
    

    
   