//Import Playwright module
import { test, expect } from '@playwright/test'

const searchKeywords = ['Playwright by testers talk', 'Cypress by testers talk', 'API Testing by testers talk'];

//using forof loop 
for (const searchKeyword of searchKeywords) {

    //Write a test
    test(`Parameterized Tests in Playwright ${searchKeyword}`, async ({ page }) => {
        //Go to URL
        await page.goto('https://www.youtube.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        //Click on playlist  
        await page.getByRole('link', { name: searchKeyword }).first().click();

        //Validate webpage title
        await expect(page).toHaveTitle(searchKeyword+' - YouTube');
    })
}



