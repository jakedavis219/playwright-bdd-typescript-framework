import {test} from "../../src/fixtures/fixtures";
import {Given, Then, When} from "../../src/utils/bdd/gherkin";
import {expect} from "@playwright/test";

test("Get Cat Fact", async ({page, apiUtils}) => {
    Given('I get a cat fact')
    const response = await apiUtils.getRandomCatFact()

    Then("I expect a 200 response")
    expect(response.status()).toEqual(200)
});

test("Get Cat Fact With Length Above 100", async ({apiActions }) => {
    Given('I get a cat fact longer than 100')
    const response = await apiActions.getCatFactOfLengthAboveANumber(100)

    Then("I expect the fact length to be greater than 100 characters")
    expect(response!.fact.length).toBeGreaterThan(100)
});
