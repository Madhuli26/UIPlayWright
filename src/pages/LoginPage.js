const BasePage = require('./BasePage');
const logger = require('../utils/logger');

class LoginPage extends BasePage {
  constructor(page, url = '') {
    super(page, url);
    this.usernameInput = 'input[name="username"], input[type="text"]';
    this.passwordInput = 'input[name="password"], input[type="password"]';
    this.loginButton = 'button[type="submit"], input[type="submit"]';
    this.errorMessage = '[role="alert"], .error-message';
  }

  async open() {
    logger.info('Opening login page');
    await this.navigate();
  }

  async login(username, password) {
    logger.info(`Attempting login for user: ${username}`);
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async isErrorVisible() {
    logger.info('Checking for login error message');
    return await this.page.locator(this.errorMessage).isVisible();
  }
}

module.exports = LoginPage;
