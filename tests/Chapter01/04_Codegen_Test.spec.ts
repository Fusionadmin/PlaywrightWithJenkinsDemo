import { test, expect } from '@playwright/test';

test('Codegen Testcase', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright TypeScript by' }).click();
  await expect(page.getByRole('link', { name: 'Playwright TypeScript by Testers Talk' })).toBeVisible();
});