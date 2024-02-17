import {APIRequestContext, expect, Page} from "@playwright/test";
import ApiUtils from "../utils/example-api-utils/amex-api-utils";

export default class ApiActions {
    readonly request: APIRequestContext;
    readonly apiUtils: ApiUtils

    constructor(request: APIRequestContext) {
        this.request = request;
        this.apiUtils = new ApiUtils(this.request)
    }

    async getCatFactOfLengthAboveANumber(length: number){
        let responseJson: { fact: string, length: number } = { fact: '', length: 0 };
        await expect
            .poll(
                async () => {
                    const response = await this.apiUtils.getRandomCatFact()
                    responseJson = await response.json()
                    return responseJson.length > length
                },
                {
                    intervals: [5_000], //leaving it at 5 a second interval to not spam the endpoint
                    timeout: 60_000,
                },
            )
            .toBe(true);

        return responseJson
    }
}
