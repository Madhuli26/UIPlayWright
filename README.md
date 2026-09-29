# UI Playwright JavaScript Framework

A reusable Playwright JavaScript test automation framework designed for UI testing across multiple browsers, with modular page objects, functional and end-to-end tests, and structured reporting.

## Project Structure

```text
UIPlayWright/
├── src/
│   ├── config/
│   │   └── browserConfig.js
│   ├── pages/
│   │   ├── BasePage.js
│   │   ├── HomePage.js
│   │   └── LoginPage.js
│   └── utils/
│       ├── logger.js
│       └── testData.js
├── tests/
│   ├── e2e/
│   │   └── homepage-e2e.spec.js
│   ├── functional/
│   │   └── login-page.spec.js
│   └── utils/
│       ├── globalSetup.js
│       └── globalTeardown.js
├── resources/
│   └── reports/
│       ├── html-report/
│       ├── junit-results/
│       └── test-results/
├── .gitignore
├── package.json
├── playwright.config.js
├── README.md
└── package-lock.json
```

## Features

- Multi-browser support: Chromium, Firefox, and WebKit
- Page Object Model for reusable UI interactions
- Functional and end-to-end test separation
- HTML and JUnit reporting
- Centralized logging for both source code and tests
- Global setup/teardown hooks
- Browser and environment configuration support via `BASE_URL`

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
npx playwright install chromium firefox webkit
```

## Run Tests

```bash
npm test
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run test:headed
```

## View Reports

```bash
npm run test:report
```

This opens the Playwright HTML report generated under `resources/reports/html-report`.

## Logging

The framework uses `winston` for structured logging.

- Log file: `resources/logs/application.log`
- Log output is available in the console as well as in the log file
- Logging is used in both `src/` and `tests/` code paths

## Configuration

The main configuration is in `playwright.config.js`.

Important settings:
- `testDir: ./tests`
- `outputDir: resources/reports/test-results`
- HTML report output: `resources/reports/html-report`
- JUnit report output: `resources/reports/junit-results/results.xml`
- Default base URL: `https://example.com`

You can override the base URL by setting:

```bash
BASE_URL=https://your-app-url npm test
```

## Notes

- This scaffold is ready for extension to your real UI application.
- Page objects can be expanded for login, dashboards, forms, tables, and navigation flows.
- Functional tests and end-to-end tests are separated for clearer test organization.
