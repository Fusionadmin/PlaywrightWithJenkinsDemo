//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Handling Mouse actions in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com');
    
    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    
    //Identify the link and use MouseActions - left click
    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button : 'left'});

    //Identify the link and use MouseActions - middle click
    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button : 'middle'});

    //Identify the link and use MouseActions - right click
    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button : 'right'});

    //Mouse hover & validate the Text - [aria-label="Search with your voice"]
    await page.getByLabel('Search with your voice').hover();

    //Mouse hover & validate the Text - Double click
    await page.getByLabel('Search with your voice').dblclick();

})

