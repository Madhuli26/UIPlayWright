const BasePage = require('./BasePage');
const logger = require('../utils/logger');

class HomePage extends BasePage {
  constructor(page, url = '') {
    super(page, url);
    this.heading = 'h1';
    this.primaryLink = 'a';
  }

  async open() {
    logger.info('Opening home page');
    await this.navigate();
  }

  async verifyHeading(expectedText) {
    logger.info(`Verifying home page heading contains: ${expectedText}`);
    await this.page.locator(this.heading).waitFor({ state: 'visible' });
    return await this.page.locator(this.heading).textContent();
  }

  async primaryLinkVisible() {
    logger.info('Checking whether at least one homepage link is visible');
    return await this.page.locator(this.primaryLink).first().isVisible();
  }
}

module.exports = HomePage;
