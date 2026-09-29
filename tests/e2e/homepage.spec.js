const { test, expect } = require('@playwright/test');
const logger = require('../../src/utils/logger');

test.describe('End-to-end homepage tests', () => {
  test('homepage renders correctly', async ({ page }) => {
    logger.info('Executing e2e test: homepage renders correctly');
    await page.goto('https://example.com');
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Example Domain');
    logger.info('E2E test passed: homepage rendered correctly');
  });

  test('navigation links on homepage are visible', async ({ page }) => {
    logger.info('Executing e2e test: navigation links are visible');
    await page.goto('https://example.com');
    const links = page.locator('a');
    await expect(links.first()).toBeVisible();
    logger.info('E2E test passed: homepage links are visible');
  });
});
