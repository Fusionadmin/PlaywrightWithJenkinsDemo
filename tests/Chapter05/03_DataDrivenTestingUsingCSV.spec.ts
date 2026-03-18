//Import Playwright module
import { test, expect } from '@playwright/test'

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    Skill1: string;
    Skill2: string;
    Skill3: string;
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testData.csv')), {
        columns: true,
        skip_empty_lines: true
}) as TestRecords[];


//Using for-of loop to iterate through the CSV data and run tests for each data set
for (const record of records) {

    //Write a test
    test(`Data driven teting using CSV file : ${record.Skill1}`, async ({ page }) => {
        //Go to URL
        await page.goto('https://www.youtube.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        //Click on playlist  
        await page.getByRole('link', { name: record.Skill1 }).first().click();

        //Validate webpage title
        //await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
        await expect(page).toHaveTitle(record.Skill3);
    })
}





