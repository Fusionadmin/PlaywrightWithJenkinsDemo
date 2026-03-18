//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Working with Checkboxes and Radio Buttons in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://jqueryui.com/checkboxradio/');

    //Identify Radio Button and Checkboxes and perform click action
    //Identify iFrame - [class="demo-frame"]
    const iframe = page.frameLocator('[class="demo-frame"]');
    //verifying button not checked
    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
    //clicking on radio button
    await iframe.locator('[for="radio-1"]').check();
    //verifying button is checked
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked();

    //verifying checkbox  checked
    await iframe.locator('[for="checkbox-1"]').check();
    //verifying button is checked
    await expect(iframe.locator('[for="checkbox-1"]')).toBeChecked();
        //verifying checkbox  checked
    await iframe.locator('[for="checkbox-2"]').check();
    //verifying button is checked
    await expect(iframe.locator('[for="checkbox-2"]')).toBeChecked();
})

