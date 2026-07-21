# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addtocart.spec.ts >> Add to Cart >> @smoke should add products to cart from PDP and related products
- Location: tests/addtocart.spec.ts:6:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 5
Received: 1
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - text: View the
      - link "Documentation" [ref=e4] [cursor=pointer]:
        - /url: https://testsmith-io.github.io/practice-software-testing/#/
      - text: for this application.
    - generic [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
        - button "Testing Guide" [ref=e9] [cursor=pointer]
        - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
      - navigation [ref=e11]:
        - generic [ref=e12]:
          - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
            - /url: /
            - img [ref=e14]
          - generic [ref=e32]:
            - menubar "Main menu" [ref=e33]:
              - menuitem "Home" [ref=e34]:
                - link "Home" [ref=e35] [cursor=pointer]:
                  - /url: /
              - menuitem "Categories" [ref=e36]:
                - button "Categories" [ref=e37] [cursor=pointer]
              - menuitem "Contact" [ref=e38]:
                - link "Contact" [ref=e39] [cursor=pointer]:
                  - /url: /contact
              - menuitem "Sign in" [ref=e40]:
                - link "Sign in" [ref=e41] [cursor=pointer]:
                  - /url: /auth/login
              - menuitem "cart" [ref=e42]:
                - link "cart" [ref=e43] [cursor=pointer]:
                  - /url: /checkout
                  - img [ref=e45]
                  - generic [ref=e47]: "1"
            - button "Select language" [ref=e49] [cursor=pointer]:
              - img [ref=e51]
              - text: EN
    - generic [ref=e54]:
      - generic [ref=e55]:
        - figure "Photo by iMattSmart on Unsplash." [ref=e57]:
          - img "Claw Hammer with Shock Reduction Grip" [ref=e59]
          - generic [ref=e60]:
            - text: Photo by
            - link "iMattSmart" [ref=e61] [cursor=pointer]:
              - /url: https://unsplash.com/@imattsmart
            - text: "on"
            - link "Unsplash" [ref=e62] [cursor=pointer]:
              - /url: https://unsplash.com/photos/jaLaLQdkBOE
            - text: .
        - generic [ref=e63]:
          - heading "Claw Hammer with Shock Reduction Grip" [level=1] [ref=e64]
          - paragraph [ref=e65]:
            - generic "category" [ref=e66]: Hammer
            - generic "brand" [ref=e67]: ForgeFlex Tools
          - generic [ref=e69]: $13.41
          - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e70]:
            - text: "CO₂:"
            - generic [ref=e71]: A
            - generic [ref=e72]: B
            - generic [ref=e73]: C
            - generic [ref=e74]: D
            - generic [ref=e75]: E
          - paragraph [ref=e76]: Ergonomic claw hammer featuring an advanced shock reduction grip system that absorbs up to 70% of impact vibrations, protecting your wrist, elbow, and shoulder during prolonged nailing sessions. The 450g carbon steel head is precision-balanced and heat-treated for maximum hardness, ensuring accurate nail driving with minimal effort on every swing. The curved claw design effortlessly removes nails without damaging surrounding wood surfaces, making it equally useful for construction and renovation work. A fiberglass-reinforced handle combines lightweight strength with exceptional durability that far outlasts traditional wooden handles. The overmolded soft-grip zone conforms to your hand shape for a custom-feeling, fatigue-free hold throughout long working days. Recommended for professional framing, carpentry, and renovation projects where operator comfort matters as much as striking performance.
          - generic [ref=e77]:
            - button "Decrease quantity" [ref=e78] [cursor=pointer]:
              - img [ref=e80]
            - generic [ref=e82]: Quantity
            - spinbutton "Quantity" [ref=e83]: "1"
            - button "Increase quantity" [ref=e84] [cursor=pointer]:
              - img [ref=e86]
          - generic [ref=e88]:
            - button "Add to cart" [active] [ref=e89] [cursor=pointer]:
              - img [ref=e91]
              - text: Add to cart
            - button "Add to favourites" [ref=e93] [cursor=pointer]:
              - img [ref=e95]
              - text: Add to favourites
            - button "Compare" [ref=e97] [cursor=pointer]:
              - img [ref=e99]
              - text: Compare
      - generic [ref=e102]:
        - heading "Specifications" [level=3] [ref=e103]
        - table [ref=e104]:
          - rowgroup [ref=e105]:
            - row "Handle Material Fiberglass" [ref=e106]:
              - cell "Handle Material" [ref=e107]
              - cell "Fiberglass" [ref=e108]
            - row "Head Weight 450g" [ref=e109]:
              - cell "Head Weight" [ref=e110]
              - cell "450g" [ref=e111]
            - row "Length 330mm" [ref=e112]:
              - cell "Length" [ref=e113]
              - cell "330mm" [ref=e114]
            - row "Material Carbon Steel" [ref=e115]:
              - cell "Material" [ref=e116]
              - cell "Carbon Steel" [ref=e117]
            - row "Warranty 5years" [ref=e118]:
              - cell "Warranty" [ref=e119]
              - cell "5years" [ref=e120]
            - row "Weight 567g" [ref=e121]:
              - cell "Weight" [ref=e122]
              - cell "567g" [ref=e123]
      - separator [ref=e124]
      - generic [ref=e125]:
        - heading "Related products" [level=2] [ref=e126]
        - generic [ref=e128]:
          - link "Hammer Hammer More information" [ref=e129] [cursor=pointer]:
            - /url: /product/01KY1M5JEAYQWTV085W4BVMBXN
            - img "Hammer" [ref=e131]
            - generic [ref=e132]:
              - heading "Hammer" [level=5] [ref=e133]
              - link "More information" [ref=e134]:
                - /url: "#"
          - link "Thor Hammer Thor Hammer More information" [ref=e135] [cursor=pointer]:
            - /url: /product/01KY1M5JEEDYPG7Q8JKTXMDCWQ
            - img "Thor Hammer" [ref=e137]
            - generic [ref=e138]:
              - heading "Thor Hammer" [level=5] [ref=e139]
              - link "More information" [ref=e140]:
                - /url: "#"
          - link "Sledgehammer Sledgehammer More information" [ref=e141] [cursor=pointer]:
            - /url: /product/01KY1M5JEGVKBSY5VYFJDZ1D50
            - img "Sledgehammer" [ref=e143]
            - generic [ref=e144]:
              - heading "Sledgehammer" [level=5] [ref=e145]
              - link "More information" [ref=e146]:
                - /url: "#"
          - link "Claw Hammer with Fiberglass Handle Claw Hammer with Fiberglass Handle More information" [ref=e147] [cursor=pointer]:
            - /url: /product/01KY1M5JEJ8YQ4FEEZRKRQG3J8
            - img "Claw Hammer with Fiberglass Handle" [ref=e149]
            - generic [ref=e150]:
              - heading "Claw Hammer with Fiberglass Handle" [level=5] [ref=e151]
              - link "More information" [ref=e152]:
                - /url: "#"
          - link "Court Hammer Court Hammer More information" [ref=e153] [cursor=pointer]:
            - /url: /product/01KY1M5JENZTKW6S4X75A8B6GV
            - img "Court Hammer" [ref=e155]
            - generic [ref=e156]:
              - heading "Court Hammer" [level=5] [ref=e157]
              - link "More information" [ref=e158]:
                - /url: "#"
          - link "Claw Hammer Claw Hammer More information" [ref=e159] [cursor=pointer]:
            - /url: /product/01KY1M5JEBDAPPFZXT4Q3NMN98
            - img "Claw Hammer" [ref=e161]
            - generic [ref=e162]:
              - heading "Claw Hammer" [level=5] [ref=e163]
              - link "More information" [ref=e164]:
                - /url: "#"
    - contentinfo [ref=e166]:
      - generic [ref=e167]:
        - text: This is a DEMO application (
        - link "GitHub repo" [ref=e168] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
        - text: ), used for software testing training purpose. |
        - link "Privacy Policy" [ref=e169] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=e170] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=e171] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=e172]: v2.3 | Built 2026-07-17 | Angular 20.0.5
    - button "Open chat" [ref=e174] [cursor=pointer]:
      - img [ref=e175]
  - alert "Product added to shopping cart." [ref=e178]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { HomePage } from '../playwright/pageobjects/homepage';
  3  | import { ProductDetailPage } from '../playwright/pageobjects/productdetailpage';
  4  | 
  5  | test.describe('Add to Cart', () => {
  6  |   test('@smoke should add products to cart from PDP and related products', async ({ page }) => {
  7  |     const homePage = new HomePage(page);
  8  |     const pdpPage = new ProductDetailPage(page);
  9  | 
  10 |     // 1. Click on product from home page - Claw Hammer with Shock Reduction Grip
  11 |     await test.step('Navigate to home page and select product', async () => {
  12 |       await homePage.goto();
  13 |     
  14 |     // Find and click on Claw Hammer with Shock Reduction Grip
  15 |       const clawHammer = homePage.productCards.filter({ hasText: 'Claw Hammer with Shock Reduction Grip' });
  16 |       await clawHammer.click();
  17 |     });
  18 | 
  19 |     // 2. Notice no cart icon is seen in menu (cart icons should not be visible)
  20 |     await test.step('Verify cart icon is not visible initially', async () => {
  21 |       await expect(pdpPage.cartIcon).not.toBeVisible();
  22 |     });
  23 | 
  24 |     // 3. Click on Add to cart
  25 |     await test.step('Add product to cart', async () => {
  26 |       await pdpPage.clickAddToCart();
  27 |     });
  28 | 
  29 |     // 4. Cart icons with badge count 1 is displayed
  30 |     const cartCountAfterFirstAdd = await pdpPage.getCartCount();
  31 |     await expect(cartCountAfterFirstAdd).toBe(1);
  32 |     await test.step(`Cart count after first add: ${cartCountAfterFirstAdd}`, async () => {});
  33 | 
  34 |     // 5. Scroll down to related products on PDP page
  35 |     await test.step('Scroll to related products', async () => {
  36 |       await pdpPage.scrollToRelatedProducts();
  37 |     });
  38 | 
  39 |     // 6. Get the count of product cards
  40 |     const relatedProductsCount = await pdpPage.getRelatedProductsCount();
  41 |     expect(relatedProductsCount).toBeGreaterThan(0);
  42 |     await test.step(`Found ${relatedProductsCount} related products`, async () => {});
  43 | 
  44 |     // 7. Click on each product card and click on add to cart
  45 |     for (let i = 0; i < relatedProductsCount; i++) {
  46 |       await test.step(`Add related product ${i + 1} to cart`, async () => {
  47 |         await pdpPage.clickRelatedProduct(i);
  48 |       
  49 |       // Click add to cart
  50 |         await pdpPage.clickAddToCart();
  51 |       
  52 |       // Go back to the original product page for next related product
  53 |         await page.goBack();
  54 |       
  55 |       // Scroll back to related products
  56 |         await pdpPage.scrollToRelatedProducts();
  57 |       });
  58 |     }
  59 | 
  60 |     // 8. Validate the cart count where it should be 5 (1 initial + 4 related products)
  61 |     const finalCartCount = await pdpPage.getCartCount();
> 62 |     await expect(finalCartCount).toBe(5);
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  63 |     await test.step(`Final cart count: ${finalCartCount}`, async () => {});
  64 | 
  65 |     // 9. Click on cart icon and notice 5 products got added and displayed in cart
  66 |     await test.step('Open cart and verify products', async () => {
  67 |       await pdpPage.clickCartIcon();
  68 |       const cartProductCount = await pdpPage.getCartProductCount();
  69 |       await expect(cartProductCount).toBe(5);
  70 |     });
  71 |   });
  72 | });
  73 | 
```