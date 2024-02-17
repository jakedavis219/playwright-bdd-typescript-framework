import {Page} from "@playwright/test";

export default class SauceDemoLoginSelectors {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLoginUsername(){
        return this.page.getByTestId("username");
    }

    getLoginPassword(){
        return this.page.getByTestId("password");
    }

    getLoginButton(){
        return this.page.getByTestId("login-button");
    }

    getErrorBox(){
        return this.page.getByTestId("error");
    }
}
