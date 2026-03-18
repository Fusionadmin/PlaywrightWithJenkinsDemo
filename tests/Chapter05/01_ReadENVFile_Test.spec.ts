//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Read ENV file config in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto(`${process.env.YOUTUBE_URL}`);

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
})

