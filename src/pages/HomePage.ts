import { Locator, Page } from "@playwright/test";


export class HomePage {

    readonly page:Page;
    
    readonly searchTestbox : Locator;
    
    //Constructor to initialize the page object/element
    constructor(page:Page) {
        this.page = page;
        
        //Elements
        //this.searchTestbox = page.getByRole('combobox', { name: 'Search' });
        this.searchTestbox = page.locator('[name="search_query"]');

    }

    //Methods to perform actions on the page
    
    //Go to URL
    // async goToURL() {
    //     await this.page.goto(`${process.env.YOUTUBE_URL}`);
    // }

    async goToURL() {
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.YOUTUBE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.YOUTUBE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
    }

    //Search with keywords
    async searchWithKeywords(keyword:string) {
        await this.searchTestbox.fill(keyword);
        await this.searchTestbox.press('Enter');
    }
}
