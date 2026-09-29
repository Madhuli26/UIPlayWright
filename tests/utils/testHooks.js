const logger = require('../../src/utils/logger');

async function beforeEachTest(page, testInfo) {
  logger.info(`Starting test: ${testInfo.title} on browser ${testInfo.project.name}`);
  await page.goto('/');
}

async function afterEachTest(page, testInfo) {
  logger.info(`Finished test: ${testInfo.title} with status: ${testInfo.status}`);
}

module.exports = {
  beforeEachTest,
  afterEachTest,
};
