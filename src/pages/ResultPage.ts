import { Locator, Page } from "@playwright/test";


export class ResultPage {

    readonly page:Page;
    
    //Constructor to initialize the page object/element
    constructor(page:Page) {
        this.page = page;
        
        //Elements
    }

    //Methods to perform actions on the page
    //Click on the playlist link
    async clickOnPlaylist(link:string) {
        await this.page.getByRole('link', { name: link }).first().click();
    }
}