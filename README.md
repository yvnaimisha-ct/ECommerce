# E-Commerce Test Automation

A comprehensive test automation framework for e-commerce application testing using Playwright.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Test Organization](#test-organization)
- [Running Tests](#running-tests)
- [Test Suites](#test-suites)
- [Page Object Model](#page-object-model)
- [Smoke Tests](#smoke-tests)
- [Debugging](#debugging)
- [Reports](#reports)
- [Best Practices](#best-practices)

## 🎯 Overview

This project provides automated end-to-end testing for an e-commerce platform using Playwright. The framework follows best practices including Page Object Model (POM), test tagging, and cross-browser testing.

## ✨ Features

- **Page Object Model**: Clean separation of test logic and page interactions
- **Cross-browser Testing**: Support for Chromium, Firefox, and WebKit
- **Smoke Tests**: Critical test suite for quick validation
- **Test Tagging**: Organize tests with @smoke and other tags
- **Parallel Execution**: Run tests in parallel for faster execution
- **HTML Reports**: Detailed test reports with screenshots and traces
- **Retry Mechanism**: Automatic retry on CI for flaky tests
- **Headed & Headless Modes**: Run tests in both modes

## 📁 Project Structure

```
ECommerce/
├── playwright/
│   └── pageobjects/
│       ├── homepage.ts          # Home page interactions
│       ├── loginpage.ts         # Login page interactions
│       └── productdetailpage.ts # Product detail page interactions
├── tests/
│   ├── addtocart.spec.ts        # Add to cart functionality tests
│   ├── homepage.spec.ts         # Homepage functionality tests
│   ├── login.spec.ts            # Login/logout functionality tests
│   └── example.spec.ts          # Example test file
├── playwright.config.ts          # Playwright configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file
```

## 🔧 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yvnaimisha-ct/ECommerce.git
cd ECommerce
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## ⚙️ Configuration

The project is configured in `playwright.config.ts`:

- **Base URL**: `https://practicesoftwaretesting.com`
- **Test ID Attribute**: `data-test`
- **Reporter**: HTML
- **Retry**: 2 retries on CI
- **Workers**: 1 on CI, undefined locally (parallel)

## 🧪 Test Organization

Tests are organized by functionality:

- **Login Tests** (`login.spec.ts`): Authentication, forgot password
- **Homepage Tests** (`homepage.spec.ts`): Product display, search, filtering, sorting
- **Add to Cart Tests** (`addtocart.spec.ts`): Cart functionality, related products

## 🚀 Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode
```bash
npm run test:headed
```

### Run Smoke Tests Only
```bash
npm run test:smoke
```

### Run Specific Test File
```bash
npx playwright test tests/login.spec.ts
```

### Run Tests with UI Mode
```bash
npm run test:ui
```

### Debug Tests
```bash
npm run test:debug
```

### View Test Report
```bash
npm run test:report
```

## 📊 Test Suites

### 1. Login Tests (`login.spec.ts`)

- **@smoke**: Valid login credentials
- Invalid login error handling
- User logout
- Forgot password navigation

### 2. Homepage Tests (`homepage.spec.ts`)

- **@smoke**: Products grid display (images and prices)
- Product search functionality
- Category and brand filtering
- Product sorting (name and price)

### 3. Add to Cart Tests (`addtocart.spec.ts`)

- **@smoke**: Add products to cart from PDP
- Add related products to cart
- Cart badge count validation
- Cart page verification

## 🏗️ Page Object Model

The framework uses the Page Object Model pattern for maintainable test code:

```typescript
// Example: HomePage
export class HomePage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('a[data-test^="product-"]');
    this.searchInput = page.getByTestId('search-query');
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchFor(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchbutton.click();
  }
}
```

## 🔥 Smoke Tests

Smoke tests are critical tests that validate core functionality. They are tagged with `@smoke` and can be run independently:

**Run smoke tests:**
```bash
npm run test:smoke
```

**Current smoke tests:**
- Valid login
- Products grid display
- Add to cart functionality

## 🐛 Debugging

### Using Playwright Inspector
```bash
npm run test:debug
```

### Using UI Mode
```bash
npm run test:ui
```

### VS Code Debugging
Install the Playwright Test for VS Code extension and use the built-in debugger.

## 📈 Reports

The framework supports multiple reporting options:

### HTML Reports (Playwright)
After test execution, HTML reports are generated in the `playwright-report` directory.

**View latest report:**
```bash
npm run test:report
```

Reports include:
- Test execution summary
- Screenshots on failure
- Trace files for debugging
- Execution timeline

### Allure Reports
The framework uses Allure reporting for enhanced test visualization and detailed analytics.

**Run tests and generate Allure report:**
```bash
npm run test:allure
```

**Generate Allure report from existing results:**
```bash
npm run allure:generate
```

**Open Allure report:**
```bash
npm run allure:open
```

Allure reports provide:
- Beautiful test execution dashboard
- Test history and trends
- Detailed step-by-step test execution
- Screenshots and attachments
- Environment information
- Test categorization and tagging

## 📝 Best Practices

1. **Use Page Object Model**: Keep page interactions separate from test logic
2. **Tag Your Tests**: Use @smoke for critical tests
3. **Use Descriptive Names**: Make test names self-explanatory
4. **Avoid Hardcoded Waits**: Use Playwright's auto-waiting features
5. **Keep Tests Independent**: Each test should run independently
6. **Use Test Data Constants**: Define test data at the top of test files
7. **Clean Up After Tests**: Ensure tests leave the system in a clean state

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:headed` | Run all tests in headed mode |
| `npm run test:smoke` | Run only smoke tests |
| `npm run test:debug` | Run tests in debug mode |
| `npm run test:ui` | Run tests in UI mode |
| `npm run test:report` | Open HTML test report |
| `npm run test:allure` | Run tests and generate Allure report |
| `npm run allure:generate` | Generate Allure report from results |
| `npm run allure:open` | Open Allure report in browser |

## 📄 License

ISC

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on GitHub.
