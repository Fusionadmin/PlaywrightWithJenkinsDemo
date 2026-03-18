//Import Playwright module
import { test, expect } from '@playwright/test'
import testData from '../../test-data/qa/testData.json';

type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string,
        Skill3: string
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string,
        Skill3: string
    },
}

const typedTestData = testData as TestData;
//Using for-in loop to iterate through the JSON data and run tests for each data set
for (const dataSetName in typedTestData) {

    const skill = typedTestData[dataSetName as keyof TestData];

    //Write a test
    test(`Data driven teting using JSON file : ${skill.Skill1}`, async ({ page }) => {
        //Go to URL
        await page.goto('https://www.youtube.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        //Click on playlist  
        await page.getByRole('link', { name: skill.Skill1 }).first().click();

        //Validate webpage title
        //await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
        await expect(page).toHaveTitle(skill.Skill3);
    })
}





