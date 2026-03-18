//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Record at cursor Test', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.google.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
    await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

    await expect(page.getByLabel('#1 Playwright Tutorial Full Course 2025').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
    await expect(page.getByLabel('#2 Playwright API Testing Tutorial Crash Course 2024').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
})

