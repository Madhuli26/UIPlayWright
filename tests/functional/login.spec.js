const { test, expect } = require('@playwright/test');
const logger = require('../../src/utils/logger');

test.describe('Functional login tests', () => {
  test('should load login page', async ({ page }) => {
    logger.info('Executing functional test: should load login page');
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
    logger.info('Functional test passed: page loaded successfully');
  });

  test('should contain expected heading text', async ({ page }) => {
    logger.info('Executing functional test: should contain expected heading text');
    await page.goto('https://example.com');
    const heading = page.locator('h1');
    await expect(heading).toContainText('Example Domain');
    logger.info('Functional test passed: heading text verified');
  });
});
