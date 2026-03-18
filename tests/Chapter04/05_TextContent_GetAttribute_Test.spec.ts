//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Test 1 - Get Text and Get Attribute in  Playwrite', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/BakkappaN');

    //Get Text from Element
    const name = await page.locator('[itemprop="name"]').textContent();
    const trimmedName = name?.trim(); //Remove extra spaces from the text
    //console.log('Name  is : ' + name);
    console.log(`Name  is : ${trimmedName}`);
})

test('Test 2 - Get Text and Get Attribute in  Playwrite', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/BakkappaN');

    //Get Text from Element
    const name = await page.locator('[itemprop="name"]').innerText();
    const trimmedName = name?.trim(); //Remove extra spaces from the text
    //console.log('Name  is : ' + name);
    console.log(`Name  is : ${trimmedName}`);
    expect(trimmedName).toBe('Testers Talk');

    //Getting any attribute value from the identified element 
    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributeValue}`);

})