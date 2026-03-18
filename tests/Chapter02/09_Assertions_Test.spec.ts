//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Test 1 - Assertions in Playwright - Visible', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Visible, Editable, Enabled, Empty
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeVisible();
    
})

test('Test 2 - Assertions in Playwright - Editable', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Visible, Editable, Enabled, Empty
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEditable();
    
})

test('Test 3 - Assertions in Playwright - Enabled', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Visible, Editable, Enabled, Empty
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEditable();
    
})

test('Test 4 - Assertions in Playwright - Empty', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Visible, Editable, Enabled, Empty
    await page.getByPlaceholder('Search', {exact : true}).first().fill('Test');
    await page.getByPlaceholder('Search', {exact : true}).first().press('Enter');
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEmpty();
    
})

test('Test 5 - Assertions in Playwright - URL', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Verify URL, Page title, text, count elements
    await page.getByPlaceholder('Search', {exact : true}).first().fill('playwright by testers talk');
    await page.getByPlaceholder('Search', {exact : true}).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

    await expect(page).toHaveTitle('playwright by testers talk - YouTube');

    await expect(page.locator('span[class="style-scope ytd-shelf-renderer"]').first()).toHaveText('People also watched');
   
    await expect(page.locator('span[class="style-scope ytd-shelf-renderer"]')).toHaveCount(1);
    await expect(page.locator('[class="style-scope ytd-vertical-list-renderer"]')).toHaveCount(9);


})