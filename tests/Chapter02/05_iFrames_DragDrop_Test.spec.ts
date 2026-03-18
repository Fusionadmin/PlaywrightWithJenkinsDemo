//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Handling iFrames, Drag & Drop elements in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://jqueryui.com/droppable/');
    
    //Identify iFrame - [class="demo-frame"]
    const iframe = page.frameLocator('[class="demo-frame"]');

    //identify Drag element, Drop element
    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');

    //Using Playwright to Drag & drop elements
    await dragElement.dragTo(dropElement);   
    
})

