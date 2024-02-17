import {test} from "../../src/fixtures/fixtures";
import {Given, Then, When} from "../../src/utils/bdd/gherkin";
import {Usernames} from "../../src/types/usernames";
import {expect} from "@playwright/test";
import Chance from "chance";
import {LoginError} from "../../src/types/shared-types";

const chance = new Chance();

test("Happy Path - Example Test", async ({page, generalActions}) => {
  Given('I visit sauce demo')
  await page.goto("https://www.saucedemo.com/")

  When("I login with the standard user")
  await generalActions.sauceDemoLogin(Usernames.STANDARD_USER)

  Then("I can see the inventory")
  expect(page.url()).toContain('inventory')
});

test("Unsuccessful Login - Example Test", async ({page, beforeHookData, generalActions, sauceDemoLoginSelectors, }) => {
  //example of how to access before hook data
  console.log(beforeHookData.date)

  Given('I visit sauce demo')
  await page.goto("https://www.saucedemo.com/")

  When("I login with the standard user but invalid password")
  await generalActions.sauceDemoLogin(Usernames.STANDARD_USER, chance.string())

  Then(`I expect the error message ${LoginError.ERROR_MESSAGE}`)
  expect(await sauceDemoLoginSelectors.getErrorBox().innerText()).toEqual(LoginError.ERROR_MESSAGE)
});



