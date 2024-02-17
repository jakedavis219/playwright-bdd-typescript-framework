import { APIRequestContext, expect } from "@playwright/test";
// @ts-ignore
import Chance from "chance";

const chance = new Chance();

export default class ApiUtils {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  generateRandomName(prefix = true): string {
    return chance.name({ nationality: 'en', prefix })
  }

  async getRandomCatFact(maxLength = 140) {
    return await this.request.get(`https://catfact.ninja/fact?max_length=${maxLength}`);
  }

}

