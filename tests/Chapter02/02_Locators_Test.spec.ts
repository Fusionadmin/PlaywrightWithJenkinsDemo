//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Locators in PLaywright', async ({ page }) => {
    //Go to URL
    //await page.goto('https://github.com/BakkappaN/');

    //GetByRole
    //await page.getByRole('link', {name : 'Sign in'}).click();
    
    //GetByLabel
    //await page.getByLabel('Homepage', {exact : true}).first().click();

    //GetByAltText - images
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //GetByTestId - created in config.ts
    // await page.getByTestId("repositories").first().click();
    // await page.getByTestId("projects").first().click();

    //GetByText
    //await page.getByText("Sign up").first().click();

    //GetByPlaceholder
    //await page.goto('https://www.youtube.com/@testerstalk');
    //await page.getByPlaceholder('Search').fill('Testets Talk');
    
    //GetByXpath
    //await page.locator('//input[@name="search_query"]').fill('Testers Talk');

    //GetByCSSSelectors
    //await page.locator('input[name="search_query"]').fill('Tester Talk');

    //GetByTitle
    await page.goto('https://www.google.com');
    await page.getByTitle('Search').fill('playwright by testers talk');


})

