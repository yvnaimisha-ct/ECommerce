import { test, expect } from '@playwright/test';
import { HomePage } from '../playwright/pageobjects/homepage';
import { ProductDetailPage } from '../playwright/pageobjects/productdetailpage';

test.describe('Add to Cart', () => {
  test('@smoke should add products to cart from PDP and related products', async ({ page }) => {
    const homePage = new HomePage(page);
    const pdpPage = new ProductDetailPage(page);

    // 1. Click on product from home page - Claw Hammer with Shock Reduction Grip
    await test.step('Navigate to home page and select product', async () => {
      await homePage.goto();
    
    // Find and click on Claw Hammer with Shock Reduction Grip
      const clawHammer = homePage.productCards.filter({ hasText: 'Claw Hammer with Shock Reduction Grip' });
      await clawHammer.click();
    });

    // 2. Notice no cart icon is seen in menu (cart icons should not be visible)
    await test.step('Verify cart icon is not visible initially', async () => {
      await expect(pdpPage.cartIcon).not.toBeVisible();
    });

    // 3. Click on Add to cart
    await test.step('Add product to cart', async () => {
      await pdpPage.clickAddToCart();
    });

    // 4. Cart icons with badge count 1 is displayed
    const cartCountAfterFirstAdd = await pdpPage.getCartCount();
    await expect(cartCountAfterFirstAdd).toBe(1);
    await test.step(`Cart count after first add: ${cartCountAfterFirstAdd}`, async () => {});

    // 5. Scroll down to related products on PDP page
    await test.step('Scroll to related products', async () => {
      await pdpPage.scrollToRelatedProducts();
    });

    // 6. Get the count of product cards
    const relatedProductsCount = await pdpPage.getRelatedProductsCount();
    expect(relatedProductsCount).toBeGreaterThan(0);
    await test.step(`Found ${relatedProductsCount} related products`, async () => {});

    // 7. Click on each product card and click on add to cart
    for (let i = 0; i < relatedProductsCount; i++) {
      await test.step(`Add related product ${i + 1} to cart`, async () => {
        await pdpPage.clickRelatedProduct(i);
      
      // Click add to cart
        await pdpPage.clickAddToCart();
      
      // Go back to the original product page for next related product
        await page.goBack();
      
      // Scroll back to related products
        await pdpPage.scrollToRelatedProducts();
      });
    }

    // 8. Validate the cart count where it should be 5 (1 initial + 4 related products)
    const finalCartCount = await pdpPage.getCartCount();
    await expect(finalCartCount).toBe(5);
    await test.step(`Final cart count: ${finalCartCount}`, async () => {});

    // 9. Click on cart icon and notice 5 products got added and displayed in cart
    await test.step('Open cart and verify products', async () => {
      await pdpPage.clickCartIcon();
      const cartProductCount = await pdpPage.getCartProductCount();
      await expect(cartProductCount).toBe(5);
    });
  });
});
