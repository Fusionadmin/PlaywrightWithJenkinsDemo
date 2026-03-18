import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  //Set Global timeout for all tests
  globalTimeout: 60 * 60 * 1000, //60 minute
  
  //Set Global timeout for each test
  timeout: 2 * 60 * 1000, //2 minute

  //Assertion timeout
  expect: {
    timeout: 10000, //10 seconds
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 4,
//To overwrite the number of workers for a specific test file, we can use the following syntax in the test file:
//npx playwright test tests/Chapter04/04_TestReports_Test.spec.ts --workers 2
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //To add multiple reporters, we can use an array of reporters. For example, to add both HTML and JSON reporters, we can use the following configuration:
  reporter: [
    ['html', { outputFolder: 'my-html-report' }], 
    ['allure-playwright'],
    ['list'], //list for console output
   // ['dot'], // for console output
    ['json', { outputFile: 'my-json-report.json' }],    
    ['junit', { outputFile: 'my-junit-report.xml' }]
  ],
  //reporter: 'html',
  //To generate allure report, we can use the following command after running the tests:
  //allure generate allure-results --clean
  //allure open
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    testIdAttribute : 'data-tab-item',
    screenshot : 'on',
    //video : 'on',
    headless : false,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    //action Timeout : 10000, //10 seconds - set global action timeout for all actions like click, fill, etc. If any action takes more than 10 seconds to execute, it will be marked as failed.
    actionTimeout : 10000, //10 seconds - set global action timeout for all actions like click, fill, etc. If any action takes more than 10 seconds to execute, it will be marked as failed.
    
    //-------------------- to start the browser in maximized mode
    // launchOptions : {
    //   args : ['--start-maximized'] 
    // },
  },  

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }, 

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
     {
       name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], 
        channel: 'chrome'
      //  viewport: { width: 1920, height: 1080 },
      },
     },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
