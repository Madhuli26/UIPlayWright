const browserConfig = {
  baseUrl: process.env.BASE_URL || 'https://example.com',
  browsers: ['chromium', 'firefox', 'webkit'],
  defaultBrowser: 'chromium',
  timeout: 30000,
};

module.exports = browserConfig;
