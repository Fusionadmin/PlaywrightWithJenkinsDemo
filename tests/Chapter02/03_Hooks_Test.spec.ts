//Import Playwright module
import { test, expect } from '@playwright/test'

test.beforeAll(async() => {
    console.log('Running before all test...');
});

test.afterAll(async() => {
    console.log('Running after all test...');
});

test.beforeEach(async( {page}) => {
    console.log('Running before each test...');
    await page.goto('https://www.youtube.com/');
});

test.afterEach(async() => {
    console.log('Running after each test...');
});

//Write a test
test('Test 1', async ({ page }) => {
    console.log('Test1 execution started...');
    //Go to URL
    //await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');
    console.log('Test1 execution finished...');

})

test('Test 2', async ({ page }) => {
    console.log('Test2 execution started...');
    //Go to URL
    //await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube'); 
    console.log('Test2 execution finished...');

})