// Include playwright module
const { test, expect } = require('@playwright/test');
import { Page } from '@playwright/test';

test('Record the HAR file', async ({ page }: { page: Page }) => {
    
    // Recording HAR file and getting the response from it
    await page.routeFromHAR('./har/fruits.har', {
        url: '*/**/api/v1/fruits',
        update: false,
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the fruit is visible
    await expect(page.getByText('Eugene')).toBeVisible();
    await expect(page.getByText('Tomato')).toBeVisible();
    await expect(page.getByText('Blueberry')).toBeVisible();
    await expect(page.getByText('Lemon')).toBeVisible();
});