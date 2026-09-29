const testData = {
  users: {
    validUser: {
      username: 'demo-user',
      password: 'demo-pass',
    },
    invalidUser: {
      username: 'invalid-user',
      password: 'wrong-pass',
    },
  },
  urls: {
    example: 'https://example.com',
    app: process.env.BASE_URL || 'https://example.com',
  },
};

module.exports = testData;
