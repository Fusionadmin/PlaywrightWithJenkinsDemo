import { expect, Locator, Page } from "@playwright/test";


export class PlaylistPage {

    readonly page:Page;
    
    //Constructor to initialize the page object/element
    constructor(page:Page) {
        this.page = page;
        
        //Elements
    }

    //Methods to perform actions on the page
    //Validate page title
    async validatePageTitle(title:string) {
        await expect(this.page).toHaveTitle(title);
    }
}