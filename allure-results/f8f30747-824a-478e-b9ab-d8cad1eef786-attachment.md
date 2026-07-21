# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Products Grid Display >> @smoke should display all products with images and prices
- Location: tests/homepage.spec.ts:5:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e7]:
    - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
    - button "Testing Guide" [ref=e9] [cursor=pointer]
    - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
  - generic [ref=e13]:
    - paragraph [ref=e14]:
      - img "Banner" [ref=e15]
    - separator [ref=e16]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../playwright/pageobjects/homepage';
  3   | 
  4   | test.describe('Products Grid Display', () => {
  5   |   test('@smoke should display all products with images and prices', async ({ page }) => {
  6   |     const homePage = new HomePage(page);
  7   | 
  8   |     await homePage.goto();
  9   | 
  10  |     // Get all product cards
  11  |     const productCount = await homePage.productCards.count();
> 12  |     await expect(productCount).toBeGreaterThan(0);
      |                                ^ Error: expect(received).toBeGreaterThan(expected)
  13  | 
  14  |     // Verify all products have images displayed
  15  |     const imageCount = await homePage.productImages.count();
  16  |     await expect(imageCount).toBe(productCount);
  17  | 
  18  |     // Verify all images are visible and loaded
  19  |     for (let i = 0; i < imageCount; i++) {
  20  |       const image = await homePage.productImages.nth(i);
  21  |       await expect(image).toBeVisible();
  22  | 
  23  |       // Check if image has valid src attribute
  24  |       const src = await image.getAttribute('src');
  25  |       expect(src).toBeTruthy();
  26  |       expect(src).not.toBe('');
  27  |     }
  28  | 
  29  |     // Verify all products have prices
  30  |     const priceCount = await homePage.productPrices.count();
  31  |     expect(priceCount).toBe(productCount);
  32  | 
  33  |     // Verify all prices are visible and have valid format
  34  |     for (let i = 0; i < priceCount; i++) {
  35  |       const price = homePage.productPrices.nth(i);
  36  |       await expect(price).toBeVisible();
  37  | 
  38  |       const priceText = await price.textContent();
  39  |       expect(priceText).toBeTruthy();
  40  |       expect(priceText).toMatch(/\$\d+\.\d{2}/);
  41  |     }
  42  |   });
  43  | });
  44  | 
  45  | test.describe('Product Search', () => {
  46  |   test('should filter products by search keyword and update results', async ({ page }) => {
  47  |     const homePage = new HomePage(page);
  48  | 
  49  |     await homePage.goto();
  50  | 
  51  |     // Click on search placeholder and search for 'claw'
  52  |     // await homePage.clickSearchInput();
  53  |     await homePage.searchFor('claw');
  54  | 
  55  |     // Wait for search results to load
  56  |     await homePage.searchFor('claw');
  57  |     await page.waitForTimeout(2000);
  58  | 
  59  |     await expect(
  60  |       homePage.productCards.first().locator('[data-test="product-name"]')
  61  |     ).toContainText('Claw');
  62  | 
  63  |     // Verify products are filtered with 'claw' keyword
  64  |     const clawProductCount = await homePage.productCards.count();
  65  | 
  66  |     await expect(clawProductCount).toBeGreaterThan(0);
  67  |     await test.step(`Claw product count: ${clawProductCount}`, async () => {});
  68  | 
  69  |     // Verify product names contain 'claw'
  70  |     for (let i = 0; i < clawProductCount; i++) {
  71  |       const productCard = homePage.productCards.nth(i);
  72  |       await productCard.waitFor({ state: 'visible', timeout: 10000 });
  73  |       await expect(productCard.locator('[data-test="product-name"]')).toContainText('Claw');
  74  |     }
  75  | 
  76  | 
  77  |     // Clear the search
  78  |     await homePage.clickSearchInput();
  79  |     await homePage.clearSearch();
  80  | 
  81  |     // Search for 'saw'
  82  |     await homePage.searchFor('saw');
  83  | 
  84  |     await expect(
  85  |       homePage.productCards.first().locator('[data-test="product-name"]')
  86  |     ).toContainText('Saw');
  87  | 
  88  |     // Verify products are filtered with 'saw' keyword
  89  |     const sawProductCount = await homePage.productCards.count();
  90  |     await expect(sawProductCount).toBeGreaterThan(0);
  91  | 
  92  |     // Verify product names contain 'saw'
  93  |     for (let i = 0; i < sawProductCount; i++) {
  94  |       const productCard = homePage.productCards.nth(i);
  95  |       await productCard.waitFor({ state: 'visible', timeout: 10000 });
  96  |       await expect(productCard.locator('[data-test="product-name"]')).toContainText('Saw');
  97  |     }
  98  | 
  99  |     // Verify the results are different from previous search
  100 |     await expect(sawProductCount).not.toBe(clawProductCount);
  101 |   });
  102 | });
  103 | 
  104 | test.describe('Category and Brand Filtering', () => {
  105 |   test('@smoke should filter products by category and brand', async ({ page }) => {
  106 |     const homePage = new HomePage(page);
  107 | 
  108 |     // 1. User on home page
  109 |     await test.step('Navigate to home page', async () => {
  110 |       await homePage.goto();
  111 |     });
  112 |     page.on('request', request => {
```