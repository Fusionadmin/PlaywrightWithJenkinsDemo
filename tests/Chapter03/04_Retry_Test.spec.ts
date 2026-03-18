//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Test - retry',{tag :['@SmokeTesting']}, async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Test Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');
})

//Use Config - retries: process.env.CI ? 2 : 1, 