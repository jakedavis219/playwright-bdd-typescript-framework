import { APIRequestContext, expect } from "@playwright/test";


export class Hooks {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  public async exampleHook() {
    const currentDate = new Date();
    return {
      date: currentDate.toISOString().split('T')[0],
      time: currentDate.toTimeString().split(' ')[0]
    };

  }
}
