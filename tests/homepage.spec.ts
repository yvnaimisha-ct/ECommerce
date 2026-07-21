import { test, expect } from '@playwright/test';
import { HomePage } from '../playwright/pageobjects/homepage';

test.describe('Products Grid Display', () => {
  test('@smoke should display all products with images and prices', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    // Get all product cards
    const productCount = await homePage.productCards.count();
    await expect(productCount).toBeGreaterThan(0);

    // Verify all products have images displayed
    const imageCount = await homePage.productImages.count();
    await expect(imageCount).toBe(productCount);

    // Verify all images are visible and loaded
    for (let i = 0; i < imageCount; i++) {
      const image = await homePage.productImages.nth(i);
      await expect(image).toBeVisible();

      // Check if image has valid src attribute
      const src = await image.getAttribute('src');
      expect(src).toBeTruthy();
      expect(src).not.toBe('');
    }

    // Verify all products have prices
    const priceCount = await homePage.productPrices.count();
    expect(priceCount).toBe(productCount);

    // Verify all prices are visible and have valid format
    for (let i = 0; i < priceCount; i++) {
      const price = homePage.productPrices.nth(i);
      await expect(price).toBeVisible();

      const priceText = await price.textContent();
      expect(priceText).toBeTruthy();
      expect(priceText).toMatch(/\$\d+\.\d{2}/);
    }
  });
});

test.describe('Product Search', () => {
  test('should filter products by search keyword and update results', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    // Click on search placeholder and search for 'claw'
    // await homePage.clickSearchInput();
    await homePage.searchFor('claw');

    // Wait for search results to load
    await homePage.searchFor('claw');
    await page.waitForTimeout(2000);

    await expect(
      homePage.productCards.first().locator('[data-test="product-name"]')
    ).toContainText('Claw');

    // Verify products are filtered with 'claw' keyword
    const clawProductCount = await homePage.productCards.count();

    await expect(clawProductCount).toBeGreaterThan(0);
    await test.step(`Claw product count: ${clawProductCount}`, async () => {});

    // Verify product names contain 'claw'
    for (let i = 0; i < clawProductCount; i++) {
      const productCard = homePage.productCards.nth(i);
      await productCard.waitFor({ state: 'visible', timeout: 10000 });
      await expect(productCard.locator('[data-test="product-name"]')).toContainText('Claw');
    }


    // Clear the search
    await homePage.clickSearchInput();
    await homePage.clearSearch();

    // Search for 'saw'
    await homePage.searchFor('saw');

    await expect(
      homePage.productCards.first().locator('[data-test="product-name"]')
    ).toContainText('Saw');

    // Verify products are filtered with 'saw' keyword
    const sawProductCount = await homePage.productCards.count();
    await expect(sawProductCount).toBeGreaterThan(0);

    // Verify product names contain 'saw'
    for (let i = 0; i < sawProductCount; i++) {
      const productCard = homePage.productCards.nth(i);
      await productCard.waitFor({ state: 'visible', timeout: 10000 });
      await expect(productCard.locator('[data-test="product-name"]')).toContainText('Saw');
    }

    // Verify the results are different from previous search
    await expect(sawProductCount).not.toBe(clawProductCount);
  });
});

test.describe('Category and Brand Filtering', () => {
  test('@smoke should filter products by category and brand', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. User on home page
    await test.step('Navigate to home page', async () => {
      await homePage.goto();
    });
    page.on('request', request => {
      console.log('➡️', request.method(), request.url());
    });

    // 2. Select Hand Saw from hand tools
    await test.step('Select Hand Saw category', async () => {
      await homePage.selectCategoryByName('Hand Saw');
    });
    await expect(page.getByLabel('Hand Saw')).toBeChecked();
    page.on('request', request => {
      if (request.url().includes('/products')) {
        console.log(request.method(), request.url());
      }
    });

    // 3. Check if filtered products are displayed
    await expect(homePage.productCards.first()).toContainText('Saw');
    const handSawProductCount = await homePage.productCards.count();
    await expect(handSawProductCount).toBeGreaterThan(0);
    await test.step(`Hand Saw product count: ${handSawProductCount}`, async () => {});

    // 4. Select Power tools checkbox
    await test.step('Select Power Tools category', async () => {
      await homePage.selectCategoryByName('Power Tools');
    });
    await expect(page.getByLabel('Power Tools')).toBeChecked();
    await test.step('Verify Power Tools is checked', async () => {
  console.log(await page.getByLabel('Power Tools').isChecked());
});

    // 5. Select Forgeflex tools under brand filter
    await test.step('Select ForgeFlex Tools brand', async () => {
      await homePage.selectBrandByName('ForgeFlex Tools');
    });
    await expect(page.getByLabel('ForgeFlex Tools')).toBeChecked();
    console.log(await page.getByLabel('ForgeFlex Tools').isChecked());

     await expect(async () => {
      expect(await homePage.productCards.count()).toBe(4);
    }).toPass();

    // 6. Check for filtered results
    const filteredProductCount = await homePage.productCards.count();
    await expect(filteredProductCount).toBeGreaterThan(0);
    await test.step(`Filtered product count: ${filteredProductCount}`, async () => {});

    // 7. Check the filtered product card has name and price
    for (let i = 0; i < filteredProductCount; i++) {
      const productCard = homePage.productCards.nth(i);
      await productCard.waitFor({ state: 'visible' });

      await expect(
        productCard.getByTestId('product-name')
      ).not.toBeEmpty();

      await expect(
        productCard.getByTestId('product-price')
      ).toHaveText(/\$\d+\.\d{2}/);
    }

    // 8. Apply sorting - Name (A - Z)
    await test.step('Sort by Name (A - Z)', async () => {
      await homePage.selectSortOption('name,asc');
      const namesAsc = await homePage.getProductNames();
      const sortedNamesAsc = [...namesAsc].sort((a, b) => a.localeCompare(b));
      await expect(namesAsc).toEqual(sortedNamesAsc);
    });

    // 9. Apply sorting - Name (Z - A)
    await test.step('Sort by Name (Z - A)', async () => {
      await homePage.selectSortOption('name,desc');
      const namesDesc = await homePage.getProductNames();
      const sortedNamesDesc = [...namesDesc].sort((a, b) => b.localeCompare(a));
      await expect(namesDesc).toEqual(sortedNamesDesc);
    });

    // 10. Apply sorting - Price (High - Low)
    await test.step('Sort by Price (High - Low)', async () => {
      await homePage.selectSortOption('price,desc');
        const pricesDesc = await homePage.getProductPrices();
        const sortedPricesDesc = [...pricesDesc].sort((a, b) => b - a);
        await expect(pricesDesc).toEqual(sortedPricesDesc);
    });

    // 11. Apply sorting - Price (Low - High)
    await test.step('Sort by Price (Low - High)', async () => {
      await homePage.selectSortOption('price,asc');
        const pricesAsc = await homePage.getProductPrices();
        const sortedPricesAsc = [...pricesAsc].sort((a, b) => a - b);
        await expect(pricesAsc).toEqual(sortedPricesAsc);
    });
  });
});