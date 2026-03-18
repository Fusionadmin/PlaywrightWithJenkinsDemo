//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Test 1 - Soft Assertions in Playwright - Test Execution will continue', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Visible, Editable, Enabled, Empty
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEmpty();

    //Verify URL, Page title, text, count elements
    await page.getByPlaceholder('Search', {exact : true}).first().fill('playwright by testers talk');
    await page.getByPlaceholder('Search', {exact : true}).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

    await expect.soft(page).toHaveTitle('playwright by testers talk - YouTube');

    await expect(page.locator('span[class="style-scope ytd-shelf-renderer"]').first()).toHaveText('People also watched');
   
    await expect(page.locator('span[class="style-scope ytd-shelf-renderer"]')).toHaveCount(1);
    await expect(page.locator('[class="style-scope ytd-vertical-list-renderer"]')).toHaveCount(9);

})