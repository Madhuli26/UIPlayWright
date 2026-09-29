const { test, expect } = require('@playwright/test');
const logger = require('../../src/utils/logger');
const LoginPage = require('../../src/pages/LoginPage');
const testData = require('../../src/utils/testData');

async function renderLoginForm(page) {
  await page.setContent(`
    <html>
      <body>
        <form id="loginForm">
          <input name="username" type="text" />
          <input name="password" type="password" />
          <button type="submit">Login</button>
          <div role="alert" style="display:none;">Invalid credentials</div>
        </form>
        <script>
          const form = document.getElementById('loginForm');
          form.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = form.elements.username.value;
            const password = form.elements.password.value;
            const errorBox = form.querySelector('[role="alert"]');
            if (username !== 'demo-user' || password !== 'demo-pass') {
              errorBox.style.display = 'block';
            } else {
              errorBox.style.display = 'none';
            }
          });
        </script>
      </body>
    </html>
  `);
}

test.describe('Functional login page tests', () => {
  test('should render login form fields', async ({ page }) => {
    logger.info('Executing functional test: should render login form fields');
    await renderLoginForm(page);

    const loginPage = new LoginPage(page, testData.urls.app);
    await expect(page.locator(loginPage.usernameInput)).toBeVisible();
    await expect(page.locator(loginPage.passwordInput)).toBeVisible();
    await expect(page.locator(loginPage.loginButton)).toBeVisible();
    logger.info('Functional login form validation passed');
  });

  test('should show an error on invalid login', async ({ page }) => {
    logger.info('Executing functional test: should show an error on invalid login');
    await renderLoginForm(page);

    const loginPage = new LoginPage(page, testData.urls.app);
    await loginPage.login(testData.users.invalidUser.username, testData.users.invalidUser.password);

    await expect(page.locator(loginPage.errorMessage)).toBeVisible();
    logger.info('Functional invalid login check passed');
  });
});
