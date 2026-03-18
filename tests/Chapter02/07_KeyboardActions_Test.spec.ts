//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Keyboard Actions', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com');
    
    //Search with keywords and use Enter keyboard action
    // await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    // await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    
    // //Selectiond and Deleting from keyboard
    // await page.getByRole('combobox', { name: 'Search' }).click();
    // await page.keyboard.press('Control+A');
    // await page.keyboard.press('Backspace');

    // await page.getByRole('combobox', { name: 'Search' }).click();
    // await page.keyboard.press('Control+A');
    // await page.getByRole('combobox', { name: 'Search' }).fill('Delete Meeee');
    //await page.keyboard.press('Control+A');
    // //await page.keyboard.press('Delete');
    // await page.getByRole('combobox', { name: 'Search' }).press('Enter');


    //Press Tab and Enter
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
})

