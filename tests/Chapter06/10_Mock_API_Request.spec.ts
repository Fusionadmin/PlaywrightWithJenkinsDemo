// Include playwright module
const { test, expect } = require('@playwright/test');
import { Page } from '@playwright/test';
test("API Request Mocking Using Playwright", async ({ page }: { page: Page }) => {

    // Mock the api call before navigating to desired page - OVERWRITING api RESPONSE
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            { name: 'playwright by testers talk', id: 21 },
            { name: 'cypress by testers talk', id: 71 },
            { name: 'api testing by testers talk', id: 72 },
            { name: 'postman by testers talk', id: 73 },
            { name: 'rest assured by testers talk', id: 74 },
        ];
        await route.fulfill({ json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the mocked values
    await expect(page.getByText('playwright by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
    await expect(page.getByText('postman by testers talk')).toBeVisible();
    await expect(page.getByText('rest assured by testers talk')).toBeVisible();
});
   