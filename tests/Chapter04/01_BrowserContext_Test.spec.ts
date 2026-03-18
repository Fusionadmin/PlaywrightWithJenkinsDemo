//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Multiple Browser/Tabs in Playright', async ({ page , browser }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');

    //Create a new browser (session) context and page
    const context2 = await browser.newContext(); //Create a new browser context - this will create a new incognito window
    const page2 = await context2.newPage(); //Create a new page in the new browser context

    //Go to URL
    await page2.goto('https://www.youtube.com/');

    //Search with keywords
    await page2.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page2.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on playlist  
    await page2.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    //Validate webpage title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');

    //Creare a new Tab in the same browser context
    const newTab = await context2.newPage(); //Create a new page in the same browser context - this will open a new tab in the same incognito window

    //Go to URL
    await newTab.goto('https://www.youtube.com/');
        //Search with keywords
    await newTab.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await newTab.getByRole('combobox', { name: 'Search' }).press('Enter');
})

