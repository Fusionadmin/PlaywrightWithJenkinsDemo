//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Test 1', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');
})

//Write a test
test('Test 2', async ({ page }) => {
    //Testing failed test
    expect(true).toBe(false);
})

//Write a test
test('Test 3', async ({ page }) => {
    //Testing failed test
    expect(true).toBe(false);
})

//To re-run failed tests, we can use the command line option --last-failed or --rerun-failed. This will run only the tests that failed in the previous run.
//npx playwright test --last-failed    