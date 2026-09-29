const logger = require('../utils/logger');

class BasePage {
  constructor(page, url = '') {
    this.page = page;
    this.url = url;
    logger.info(`Initialized BasePage with URL: ${url || 'N/A'}`);
  }

  async navigate() {
    logger.info(`Navigating to: ${this.url}`);
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async waitForPageLoad() {
    logger.info('Waiting for page load event');
    await this.page.waitForLoadState('load');
  }

  async click(selector, options = {}) {
    logger.info(`Clicking element: ${selector}`);
    await this.page.locator(selector).click(options);
  }

  async type(selector, value, options = {}) {
    logger.info(`Typing into ${selector} with value: ${value}`);
    await this.page.locator(selector).fill(value, options);
  }

  async getText(selector) {
    logger.info(`Reading text from selector: ${selector}`);
    return await this.page.locator(selector).textContent();
  }
}

module.exports = BasePage;
