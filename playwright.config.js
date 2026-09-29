const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  globalSetup: require.resolve('./tests/utils/globalSetup.js'),
  globalTeardown: require.resolve('./tests/utils/globalTeardown.js'),
  reporter: [
    ['list'],
    ['html', { outputFolder: path.join(__dirname, 'resources', 'reports', 'html-report'), open: 'never' }],
    ['junit', { outputFile: path.join(__dirname, 'resources', 'reports', 'junit-results', 'results.xml') }],
  ],
  outputDir: path.join(__dirname, 'resources', 'reports', 'test-results'),
  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
