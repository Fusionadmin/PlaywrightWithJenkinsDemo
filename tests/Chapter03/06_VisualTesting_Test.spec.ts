//Import Playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Visual Comparison in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/login');

    //Search with keywords
    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator('#login_field').fill('testers talk');

   // await expect(page).toHaveScreenshot('GitHubLoginPage.png');
})

//Write a test
test('Element Visual Comparison in Playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/login');

    //Search with keywords
    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');

    await expect(element).toHaveScreenshot('GitHubLoginForm.png');

    await page.locator('#login_field').fill('testers talk');

    await expect(element).toHaveScreenshot('GitHubLoginForm.png');

})