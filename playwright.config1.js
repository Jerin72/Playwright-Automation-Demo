// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
/* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 40 * 1000,
  expect: {
    timeout: 60*1000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
fullyParallel:true,
//retries:2,
//workers:3,   to specify the number of workers
projects:[{
    name:"chrome_project",
    use: { 
      headless: false,
      browserName:'chromium',
      viewport:{
        height:500,
        width:500,
      },
      permissions:['notifications','camera','geolocation','microphone'],
}
},
{
    name:"firefox_project",
    use: { 
      headless: false,
      browserName:'firefox',
      ...devices['Galaxy S24'],
      screenshot:'only-on-failure',
      video:'retain-on-failure',
      trace:'retain-on-failure',
      permissions:['geolocation'],
      //firefox and webkit will only take geolocation as permission
      /*geolocation:{
        latitude:9.9,longitude:1.45
      },
      */
     ignoreHTTPSErrors:true,
},
},
{
    name:"webkit_project",
    use: { 
      headless: false,
      browserName:'webkit'
},
}
]
});

