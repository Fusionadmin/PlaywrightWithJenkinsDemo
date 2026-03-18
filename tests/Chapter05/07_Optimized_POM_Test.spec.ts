//Import Playwright module
//Impoirt custom test and expect from TestFixture
import { test } from "../../src/fixture/TestFixture";

//Write a test
test('OptimizedPOM test in Playwrite', async ({ page, homePage, resultPage, playlistPage }) => {
           
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORD}`);
      
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

    await playlistPage.validatePageTitle(`${process.env.TITLE_KEYWORD}`);
    
})