//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Testing run-thru screenshots', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');


    //Validate webpage title
    await expect(page).toHaveTitle('Testers Talk - YouTube');
})

