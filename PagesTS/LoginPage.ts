import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{
    page:Page
    userid:Locator
    password:Locator
    login:Locator
    msg:Locator

constructor(page:Page)  //constructor so used this. instead of const
    {
        this.page=page
        this.userid =page.getByPlaceholder("Username")
        this.password =page.getByPlaceholder("Password")
        this.login=page.locator("#login-button")
        this.msg=page.locator("h3[data-test='error']")
    }

async loginurl()
{
    await this.page.goto("https://www.saucedemo.com/")
}

async validateuser(username:string,pwd:string)
{
    await this.userid.fill(username)
    await this.password.fill(pwd)
    await this.login.click()
    console.log("Valid Username and Password")
    expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
}

async invalidusername(username:string,pwd:string)
{
    await this.userid.fill(username)
    await this.password.fill(pwd)
    await this.login.click()
    console.log("Invalid Username")
    expect(this.msg).toHaveText("Epic sadface: Username and password do not match any user in this service")
}

async invalidpwd(username:string,pwd:string)
{
    await this.userid.fill(username)
    await this.password.fill(pwd)
    await this.login.click()
    console.log("Invalid Password")
    expect(this.msg).toHaveText("Epic sadface: Username and password do not match any user in this service")
}

async invaliduser(username:string,pwd:string)
{
    await this.userid.fill(username)
    await this.password.fill(pwd)
    await this.login.click()
    console.log("Invalid Username and Password")
    expect(this.msg).toHaveText("Epic sadface: Username and password do not match any user in this service")
}
}