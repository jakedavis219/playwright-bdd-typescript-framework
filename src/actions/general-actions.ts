import { APIRequestContext, expect, Page } from "@playwright/test";
import SauceDemoLoginSelectors from "../utils/example-ui-utils/sauce-demo-login-selectors";
import {Usernames} from "../types/usernames";


export default class GeneralActions {
  readonly request: APIRequestContext;
  readonly page: Page;
  readonly sauceDemoLoginSelectors: SauceDemoLoginSelectors;

  constructor(page: Page, request: APIRequestContext) {
    this.request = request;
    this.page = page;
    this.sauceDemoLoginSelectors = new SauceDemoLoginSelectors(this.page)
  }

  async sauceDemoLogin(username: Usernames, password = "secret_sauce"){
    await this.sauceDemoLoginSelectors.getLoginUsername().fill(username)
    await this.sauceDemoLoginSelectors.getLoginPassword().fill(password)

    await this.sauceDemoLoginSelectors.getLoginButton().click()
  }
}
