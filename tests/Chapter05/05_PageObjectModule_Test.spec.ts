//Import Playwright module
import { test, expect } from '@playwright/test'
import { PlaylistPage } from '../../src/pages/PlaylistPage';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';

//Write a test
test('POM test in Playwrite', async ({ page }) => {

    //Set viewport size in Test level
    //await page.setViewportSize({ width: 1080, height: 1080 });
           
    //Create object of HomePage class
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORD}`);
      
    ////Create object of ResultPage class
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

    //Create object of PlaylistPage class
    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.TITLE_KEYWORD}`);
    
})

