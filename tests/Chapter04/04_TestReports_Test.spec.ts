//Import Playwright module
import { test, expect } from '@playwright/test'

//Cteate groups for different test scenarios

test.describe('Smoke Testing', () => {
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
});

test.describe('Regression Testing', () => {
    test('Test 2 - Annotations', async ({ page }) => {
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

    test('Test 3 - Annotations', async ({ page }) => {
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

    test('Test 4 - Annotations', async ({ page }) => {
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
});

//Use a command


