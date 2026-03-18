//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Test 1 - Annotations', async ({ page }) => {
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

test.skip('Test 2 - Annotations - Skipping the test', async ({ page }) => {
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

test.only('Test 3 - Annotations - Running only specific tests - using only metod', async ({ page }) => {
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