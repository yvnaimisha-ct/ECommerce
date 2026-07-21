import { Locator, Page } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;
  readonly relatedProducts: Locator;
  readonly cartProductRows: Locator;
  readonly cartTotal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByTestId('add-to-cart');
    this.cartIcon = page.getByTestId('nav-cart');
    this.cartBadge = page.getByTestId('cart-quantity');
    this.relatedProducts = page.locator('.row:has(h2:has-text("Related products")) .card');
    this.cartProductRows = page.locator('tbody tr');
    this.cartTotal = page.getByTestId('cart-total');
  }

  async goto(productId: string) {
    await this.page.goto(`/product/${productId}`);
  }

  async clickAddToCart() {
    await this.addToCartButton.click();
  }

  async getCartCount(): Promise<number> {
    const badgeText = await this.cartBadge.textContent();
    return badgeText ? parseInt(badgeText) : 0;
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }

  async scrollToRelatedProducts() {
    await this.relatedProducts.first().scrollIntoViewIfNeeded();
  }

  async getRelatedProductsCount(): Promise<number> {
    return await this.relatedProducts.count();
  }

  async clickRelatedProduct(index: number) {
    await this.relatedProducts.nth(index).click();
  }

  async getCartProductCount(): Promise<number> {
    return await this.cartProductRows.count();
  }
}
