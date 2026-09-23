import test from "@playwright/test";

test.describe("Grouping Test Sample",()=>{   //grouping the testcases


test("first test",async ({page}) =>
{
    console.log("Calling First TestCase")
})
test("second test",async ({page}) =>
{
    console.log("Calling Second TestCase")
})

///browser fixture is only supported in hooks. pages and context will not work
test.beforeAll("Before all Hook",async ({browser}) =>    //beforeAll hooks
{
    console.log("Run Before All TestCase")
    console.log("Welcome!")
    console.log()
})

test.afterAll("After all Hook",async ({browser}) =>    //afterAll hooks
{
    console.log()
    console.log("Run After All TestCase")
    console.log("Bye-Bye!")
})

test.beforeEach("Before Each Hook",async ({browser}) =>    //BeforeEach hooks
{
    console.log("Running Before Each TestCase")
    console.log()
})
test.afterEach("After Each Hook",async ({browser}) =>    //AfterEach hooks
{
    console.log("Running After Each TestCase")
    console.log()
})

})

