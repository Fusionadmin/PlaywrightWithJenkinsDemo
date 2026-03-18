//Import Playwright module
//Create EXCEL file with test data
//Create Utility function to read EXCEL file and return data in array of objects format
//Use the utility function to read EXCEL data and run tests for each data set

import { test, expect } from '@playwright/test'

import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filepath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');
const records = readExcelFile(filepath);

if (!records || records.length === 0) {
    console.error('No test data found in Excel file:', filepath);
    process.exit(1);
}

// Validate that all records have the required Skill1 field
const validRecords = records.filter((record, index) => {
    if (!record.Skill1) {
        console.warn(`Record at index ${index} is missing Skill1 field, skipping:`, record);
        return false;
    }
    return true;
});

if (validRecords.length === 0) {
    console.error('No valid test data found in Excel file');
    process.exit(1);
}

// Using for-of loop to iterate through the EXCEL data and run tests for each data set
for (const record of validRecords) {

    test(`Data Driven Testing Using Excel file in playwright : ${record.Skill1}`, async ({ page }) => {

        console.log(`Excel file row data`);
        console.log(`Skill 1 : ${record.Skill1}`);
        console.log(`Skill 2 : ${record.Skill2}`);
        console.log(`Skill 3 : ${record.Skill3}`);

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
    });
}





