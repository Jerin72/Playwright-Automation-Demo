import test, { expect } from "@playwright/test";
import { POM_Manager } from "../Pages/POM_Manager";
import testdata from "../Utils/TestData.json"

//const dataobj=JSON.parse(JSON.stringify(testdata))  //converts to normal object in case of single object in JSON

for(const dataobj of testdata)  //giving the same object variable to ease the edit in code
{
test("Demo Project"+dataobj.buy_product, async ({page})=>{

    let pom_manager=new POM_Manager(page)
    const login = pom_manager.getloginpage()
    
    await login.loginurl()
    //await login.invalidusername(dataobj.invalidusername,dataobj.validpassword)
    //await login.invalidpwd(dataobj.validusername,dataobj.invalidpassword)
    //await login.invaliduser(dataobj.invalidusername,dataobj.invalidpassword)
    await login.validateuser(dataobj.validusername,dataobj.validpassword)

    const productpage=pom_manager.getproductpage()
    await productpage.productlist()
    await productpage.addtocart(dataobj.buy_product)
    await productpage.clickcart()

    const cart=pom_manager.getcartpage()
    await cart.validateCartProduct(dataobj.buy_product)
    await cart.checkOut()

    const checkout=pom_manager.getcheckoutpage()
    await checkout.fillInfo(dataobj.firstname,dataobj.lastname,dataobj.zipcode)
    await checkout.finish()

    const msgcheck=pom_manager.getmsgcheckpage()
    await msgcheck.validateMsgUrl()


    await page.waitForTimeout(3000)

}
)
}