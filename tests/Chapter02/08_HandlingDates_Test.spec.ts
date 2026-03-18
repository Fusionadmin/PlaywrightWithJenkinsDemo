//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Handling Date values in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://jqueryui.com/datepicker/');
    
    //Identify iFrame - [class="demo-frame"]
    const iframe = page.frameLocator('[class="demo-frame"]');
    
    //Set hardcoded Date 
    //await iframe.locator('[id="datepicker"]').fill('02/20/2026');

    //Selecting dynamic Date from Calendar - clicking on field & selecting Today's Date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();
    //await iframe.locator('[class=" ui-datepicker-days-cell-over  ui-datepicker-today"]').click();
    
    //Select past Date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="15"').click();

    //Select Future Date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();
    
})

