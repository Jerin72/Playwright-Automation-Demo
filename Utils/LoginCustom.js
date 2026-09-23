import test from "@playwright/test";

//creating custom tests
exports.customtest=test.extend(
{
logindata:{
    validusername:"standard_user",
    validpassword:"secret_sauce",
    invalidusername:"invalid_user",
    invalidpassword:"invalid_password",
    buy_product:"Sauce Labs Backpack",
    firstname:"Jerin",
    lastname:"Varghese",
    zipcode:"12345"
},
logindata2:{
    validusername:"standard_user",
    validpassword:"secret_sauce",
    invalidusername:"invalid_user",
    invalidpassword:"invalid_password",
    buy_product:"Sauce Labs Onesie",
    firstname:"Jerin",
    lastname:"Varghese",
    zipcode:"12345"
}
})