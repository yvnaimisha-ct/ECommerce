import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homemenu: Locator;
  readonly productCards: Locator;
  readonly productImages: Locator;
  readonly productPrices: Locator;
  readonly searchInput: Locator;
  readonly categoryCheckboxes: Locator;
  readonly brandCheckboxes: Locator;
  readonly searchbutton: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homemenu = page.getByTestId('home-nav-home');
    this.productCards = page.locator('a[data-test^="product-"]');
    this.productImages = page.locator('.card-img-top');
    this.productPrices = page.locator('[data-test="product-price"]');
    this.searchInput = page.locator('//input[@id="search-query"]');
    this.searchbutton = page.getByTestId('search-submit');
    this.categoryCheckboxes = page.locator('input[name="category_id"]');
    this.brandCheckboxes = page.locator('input[name="brand_id"]');
    this.sortDropdown = page.getByTestId('sort');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickSearchInput() {
    await this.searchInput.click();
  }

  async searchFor(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchbutton.click();
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  // async selectCategoryByName(categoryName: string) {
  //   await this.page.getByLabel(categoryName).check();
  // }

  async selectCategoryByName(categoryName: string) {
    await this.page.getByLabel(categoryName, { exact: true }).check();
    await expect(this.page.getByLabel(categoryName, { exact: true })).toBeChecked();
     await this.page.waitForLoadState('networkidle');
  }

  async selectBrandByName(brandName: string) {
    // const brandCheckbox = this.brandCheckboxes.filter({ hasText: brandName });
    // await brandCheckbox.check();
    await this.page.getByLabel(brandName, { exact: true }).check();
    await expect(this.page.getByLabel(brandName, { exact: true })).toBeChecked();
    await this.page.waitForLoadState('networkidle');
  }

  async selectSortOption(sortValue: string) {
    await this.sortDropdown.selectOption(sortValue);
    await this.page.waitForLoadState('networkidle');
  }

  async getProductNames(): Promise<string[]> {
    const names: string[] = [];
    const count = await this.productCards.count();
    for (let i = 0; i < count; i++) {
      const name = await this.productCards.nth(i).locator('[data-test="product-name"]').textContent();
      if (name) names.push(name.trim());
    }
    return names;
  }

  async getProductPrices(): Promise<number[]> {
    const prices: number[] = [];
    const count = await this.productCards.count();
    for (let i = 0; i < count; i++) {
      const priceText = await this.productCards.nth(i).locator('[data-test="product-price"]').textContent();
      if (priceText) {
        const price = parseFloat(priceText.replace('$', ''));
        prices.push(price);
      }
    }
    return prices;
  }
} 
