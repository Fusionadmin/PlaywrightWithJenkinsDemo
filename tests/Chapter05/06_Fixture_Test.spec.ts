//Import Playwright module
//import { test, expect } from '@playwright/test'
import { test } from '../../src/fixture/TestFixture';
import { PlaylistPage } from '../../src/pages/PlaylistPage';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';

//Write a test
test('Implementing Fixtures in Playwrite', async ({ page }) => {

    console.log('Test execution started...');

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
    
    console.log('Test execution ended...');
})

