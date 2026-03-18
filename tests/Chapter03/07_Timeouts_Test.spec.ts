//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
//In Config file we have set the global timeout for each test to 1 minute, so if any test takes more than 1 minute to execute, it will be marked as failed.
//  timeout: 60 * 1000, //1 minute
test('Test Timeouts in PLaywright', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');
    //Wait for 70 seconds to see the timeout in action
    await page.waitForTimeout(70 * 1000); //70 seconds
})

test('Test 2 Timeouts in PLaywright - adding local timeout overwtire', async ({ page }) => {
    test.setTimeout(60 * 1000); //Set local timeout to 60 seconds - overwrites the global timeout for this test
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');
    //Wait for 30 seconds to see the timeout in action
    await page.waitForTimeout(30 * 1000); //30 seconds
})

test('Test 3 Assertion Timeouts in PLaywright - adding local timeout overwtire', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title - Incorrect one to see the assertion timeout in action
    await expect(page).toHaveTitle('#1 Playwright Test Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube', { timeout: 5000 }); //Set assertion timeout to 5 seconds - overwrites the global assertion timeout for this expect statement

})

test('Test 4 Action Timeouts in PLaywright - adding Global timeout under USe - actionTimeout : 10000', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist - using incorrect locator to see the action timeout in action 
    await page.getByRole('link', { name: 'Playwright Test by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Test Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube', { timeout: 5000 }); //Set assertion timeout to 5 seconds - overwrites the global assertion timeout for this expect statement

})

test('Test 5 Action Timeouts in PLaywright - adding Local timeout under USe - actionTimeout : 5000', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist - using incorrect locator to see the action timeout in action 
    await page.getByRole('link', { name: 'Playwright Test by Testers Talk' }).first().click({ timeout: 5000 }); //Set action timeout to 5 seconds - overwrites the global action timeout for this click action

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Test Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube', { timeout: 5000 }); //Set assertion timeout to 5 seconds - overwrites the global assertion timeout for this expect statement

})