//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Handling Dropdown list in playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', {name : 'Create new account'}).click();

    //Select Dropdown using value
    await page.getByLabel('Month').selectOption('7');
    await page.getByLabel('Day').selectOption('21');

    //Select Dropdown using visible text
    await page.getByLabel('Month').selectOption('Dec');
    await page.getByLabel('Day').selectOption('9');

    //Validate all the options in Dropdown
    await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);

})

