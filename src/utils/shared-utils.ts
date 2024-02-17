import type { Page } from "@playwright/test";

export default class RecMainTableSharedSelectors {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getDateHeader() {
    return this.page.getByTestId("dateHeader");
  }
}
