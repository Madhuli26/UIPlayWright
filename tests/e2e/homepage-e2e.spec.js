const { test, expect } = require('@playwright/test');
const logger = require('../../src/utils/logger');
const HomePage = require('../../src/pages/HomePage');
const testData = require('../../src/utils/testData');

test.describe('End-to-end homepage tests', () => {
  test('homepage loads and heading is visible', async ({ page }) => {
    logger.info('Executing E2E test: homepage loads and heading is visible');
    const homePage = new HomePage(page, testData.urls.app);
    await homePage.open();

    const headingText = await homePage.verifyHeading('Example Domain');
    expect(headingText).toContain('Example Domain');
    logger.info('E2E homepage rendering passed');
  });

  test('homepage has visible links', async ({ page }) => {
    logger.info('Executing E2E test: homepage has visible links');
    const homePage = new HomePage(page, testData.urls.app);
    await homePage.open();

    const linkVisible = await homePage.primaryLinkVisible();
    expect(linkVisible).toBeTruthy();
    logger.info('E2E homepage link validation passed');
  });
});
