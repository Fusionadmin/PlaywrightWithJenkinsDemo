//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Iterating over matching Elements in Playwrite', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/BakkappaN');

    //Identify elements using the locator and iterate over them
    const reposirotyLinks = await page.$$('.repo');
    //The method finds all elements matching the specified selector within the page. If no elements match the selector, the return value resolves to [].
    //using for of loop
    for (const reposirotyLink of reposirotyLinks) {
        const text = await reposirotyLink.textContent();
        console.log(`First loop - Repository Link Text: ${text}`);
    }
    console.log('-----------------------------');

    //using for loop
    for (let i = 0; i < reposirotyLinks.length; i++) {
        const text = await reposirotyLinks[i].textContent();
        console.log(`Second loop - Repository Link Text: ${text}`);
    }

    console.log('-----------------------------');

    const reposirotyLinks2 = page.locator('.repo');
    const count = await reposirotyLinks2.count();
    for (let i = 0; i < count; i++) {
        const text = await reposirotyLinks2.nth(i).textContent();
        console.log(`Third loop - Repository Link Text: ${text}`);
    }   
})

