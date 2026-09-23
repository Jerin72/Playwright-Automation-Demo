//.only and skip annotations. .only to run a particular test and skip for skipping a particular test
//fixme - used to skip a test having bug. we can mark it and run it later after the bug is fixed
//fail - to skip a failed testcase

import test from "@playwright/test";

//slow -normal timeout is 3 second. we need some more time. it will have 3x time timeout
test("First Test Case",async ({page})=>
{
    console.log("Displaying First Test Case")
})

test("Second Test Case",async ({page})=>
{
    test.slow()
    console.log("Displaying Second Test Case")
})

test("Third Test Case",async ({page})=>
{
    console.log("Displaying Third Test Case")
})

test.skip("Fourth Test Case",async ({page})=>
{
    console.log("Displaying Fourth Test Case")
})

test("Fifth Test Case",async ({page})=>
{
    console.log("Displaying Fifth Test Case")
})

test.fixme("Sixth Test Case",async ({page})=>
{
    console.log("Displaying Sixth Test Case")
})

test("Seventh Test Case",async ({page})=>
{
    console.log("Displaying Seventh Test Case")
})

// test.fail("Eighth Test Case",async ({page})=>
// {
//     console.log("Displaying Eighth Test Case")
// })


//Today's task
//7 testcases
//2 normal testcases and for rest give annotations