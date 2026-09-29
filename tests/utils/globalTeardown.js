const logger = require('../../src/utils/logger');

module.exports = async () => {
  logger.info('Global test teardown completed');
};
