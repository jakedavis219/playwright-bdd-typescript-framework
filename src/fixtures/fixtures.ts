import { test as base } from "@playwright/test";
import { Hooks } from "../hooks/hooks";
import GeneralActions from "../actions/general-actions";
import SauceDemoLoginSelectors from "../utils/example-ui-utils/sauce-demo-login-selectors";
import ApiUtils from "../utils/example-api-utils/amex-api-utils";
import ApiActions from "../actions/api-actions";


interface BeforeHookData {
  date: string;
  time: string;
}

interface ApplicationFixtures {
  generalActions: GeneralActions;
  beforeHookData: BeforeHookData;
  hooks: Hooks;
  apiUtils: ApiUtils;
  apiActions: ApiActions;
  sauceDemoLoginSelectors: SauceDemoLoginSelectors
}

export const test = base.extend<ApplicationFixtures>({
  hooks: async ({ request }, use) => {
    await use(new Hooks(request));
  },

  generalActions: async ({ page, request }, use) => {
    await use(new GeneralActions(page, request));
  },

  sauceDemoLoginSelectors: async({page}, use) =>{
    await use(new SauceDemoLoginSelectors(page))
  },

  apiUtils: async ({ request }, use) => {
    await use(new ApiUtils(request));
  },

  apiActions: async({request}, use)=>{
    await use(new ApiActions(request))
  },

  beforeHookData: [
    async ({ hooks }, use) => {
      await use(await hooks.exampleHook());
    },

    { scope: "test" },
  ],
});
