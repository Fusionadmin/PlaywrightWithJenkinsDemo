//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Handling Alerts Pop-ups in Playwrite', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async dialog => {
        dialog.accept(); //for accepting the alert
        //dialog.dismiss(); //for dismissing the alert
        //dialog.accept('Testers Talk'); //for accepting the alert with input text (for prompt) 
        console.log(`Alert message is: ${dialog.message()}`); //for getting the message of the alert
        console.log(`Dialog type is: ${dialog.type()}`); //for getting the type of the dialog

    }); 
    //Click on Alert message
    await page.getByText('See an example alert', { exact: true }).click();

})

//Write a test
test('Handling Comfirms Pop-ups in Playwrite', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async dialog => {
        dialog.accept(); //for accepting the alert
        //dialog.dismiss(); //for dismissing the alert
        console.log(`Alert message is: ${dialog.message()}`); //for getting the message of the alert
        console.log(`Dialog type is: ${dialog.type()}`); //for getting the type of the dialog

    }); 
    //Click on Alert message
    await page.getByText('See a sample confirm', { exact: true }).click();

})

//Write a test
test('Handling Prompt Pop-ups in Playwrite', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        //dialog.accept(); //for accepting the alert
        //dialog.dismiss(); //for dismissing the alert
        console.log(`Alert message is: ${dialog.message()}`); //for getting the message of the alert
        console.log(`Dialog type is: ${dialog.type()}`); //for getting the type of the dialog
        await dialog.accept('Testers Talk'); //for accepting the alert with input text (for prompt) 

    }); 
    //Click on Alert message
    await page.getByText('See a sample prompt', { exact: true }).click();

})