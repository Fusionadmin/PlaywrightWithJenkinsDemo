//Import Playwright module
//Impoirt custom test and expect from TestFixture
import { test } from "../../src/fixture/TestFixture";

//Write a test
test('OptimizedPOM test in Playwrite', async ({ page, homePage, resultPage, playlistPage, testData }) => {
           
    await homePage.goToURL();
    await homePage.searchWithKeywords(String(testData.Module1TestData?.Skill1));
      
    await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));

    //await playlistPage.validatePageTitle(String(testData.Module1TestData?.Skill1)  + '☑️ - YouTube');
    
    console.log(`Skill : ${String(testData.Module1TestData?.Skill1)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill2)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill3)}`);
})