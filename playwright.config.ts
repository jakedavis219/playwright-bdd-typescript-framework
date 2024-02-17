import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  expect: {
    timeout: 10000,
    toHaveScreenshot: { maxDiffPixelRatio: 0.1 },
  },
  snapshotPathTemplate: "{testDir}/ui/visual-testing/screenshots/{testFileName}/{arg}{ext}",
  testDir: "./tests",
  timeout: 60000,
  fullyParallel: true,
  retries: 0,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html", { outputFolder: "output", open: "never" }],
    ["junit", { outputFile: "output/junit.xml" }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot: "only-on-failure",
    testIdAttribute: 'data-test'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
      testIgnore: /.*-visual.spec.ts/,
    },

    {
      name: "visual-testing",
      use: { ...devices["iPhone 13 Pro"] },
      testMatch: /.*-visual.spec.ts/,
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
