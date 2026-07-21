# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Category and Brand Filtering >> @smoke should filter products by category and brand
- Location: tests/homepage.spec.ts:105:7

# Error details

```
TypeError: body is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13]:
          - /url: /
          - img [ref=e14]
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem "Home" [ref=e34]:
              - link "Home" [ref=e35]:
                - /url: /
            - menuitem "Categories" [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem "Contact" [ref=e38]:
              - link "Contact" [ref=e39]:
                - /url: /contact
            - menuitem "Sign in" [ref=e40]:
              - link "Sign in" [ref=e41]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - paragraph [ref=e50]:
        - img "Banner" [ref=e51]
      - separator [ref=e52]
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "Sort" [level=4] [ref=e55]:
          - img [ref=e57]
          - text: Sort
        - separator [ref=e59]
        - combobox "sort" [ref=e62]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading "Price Range" [level=4] [ref=e63]:
          - img [ref=e65]
          - text: Price Range
        - separator [ref=e67]
        - generic "ngx-slider" [ref=e69]:
          - slider "ngx-slider" [ref=e74] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e75] [cursor=pointer]
          - generic [ref=e76]: "0"
          - generic [ref=e77]: "200"
          - generic [ref=e78]: "1"
          - generic [ref=e79]: "100"
        - heading "Search" [level=4] [ref=e81]:
          - img [ref=e83]
          - text: Search
        - separator [ref=e85]
        - generic [ref=e87]:
          - generic [ref=e88]: Search
          - textbox "Search" [ref=e89]
          - button "X" [ref=e90] [cursor=pointer]
          - button "Search" [ref=e91] [cursor=pointer]
        - heading "Filters" [level=4] [ref=e92]:
          - img [ref=e94]
          - text: Filters
        - separator [ref=e96]
        - heading "By category:" [level=4] [ref=e97]
        - group "Categories" [ref=e98]:
          - generic [ref=e99]: Categories
          - generic [ref=e100]:
            - generic [ref=e101]:
              - checkbox "Hand Tools" [ref=e102]
              - text: Hand Tools
            - list [ref=e103]:
              - group "Categories" [ref=e104]:
                - generic [ref=e105]: Categories
                - generic [ref=e107]:
                  - checkbox "Hammer" [ref=e108]
                  - text: Hammer
                - generic [ref=e110]:
                  - checkbox "Hand Saw" [checked] [ref=e111]
                  - text: Hand Saw
                - generic [ref=e113]:
                  - checkbox "Wrench" [ref=e114]
                  - text: Wrench
                - generic [ref=e116]:
                  - checkbox "Screwdriver" [ref=e117]
                  - text: Screwdriver
                - generic [ref=e119]:
                  - checkbox "Pliers" [ref=e120]
                  - text: Pliers
                - generic [ref=e122]:
                  - checkbox "Chisels" [ref=e123]
                  - text: Chisels
                - generic [ref=e125]:
                  - checkbox "Measures" [ref=e126]
                  - text: Measures
          - generic [ref=e127]:
            - generic [ref=e128]:
              - checkbox "Power Tools" [checked] [ref=e129]
              - text: Power Tools
            - list [ref=e130]:
              - group "Categories" [ref=e131]:
                - generic [ref=e132]: Categories
                - generic [ref=e134]:
                  - checkbox "Grinder" [checked] [ref=e135]
                  - text: Grinder
                - generic [ref=e137]:
                  - checkbox "Sander" [checked] [ref=e138]
                  - text: Sander
                - generic [ref=e140]:
                  - checkbox "Saw" [checked] [ref=e141]
                  - text: Saw
                - generic [ref=e143]:
                  - checkbox "Drill" [checked] [ref=e144]
                  - text: Drill
          - generic [ref=e145]:
            - generic [ref=e146]:
              - checkbox "Other" [ref=e147]
              - text: Other
            - list [ref=e148]:
              - group "Categories" [ref=e149]:
                - generic [ref=e150]: Categories
                - generic [ref=e152]:
                  - checkbox "Tool Belts" [ref=e153]
                  - text: Tool Belts
                - generic [ref=e155]:
                  - checkbox "Storage Solutions" [ref=e156]
                  - text: Storage Solutions
                - generic [ref=e158]:
                  - checkbox "Workbench" [ref=e159]
                  - text: Workbench
                - generic [ref=e161]:
                  - checkbox "Safety Gear" [ref=e162]
                  - text: Safety Gear
                - generic [ref=e164]:
                  - checkbox "Fasteners" [ref=e165]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e167]
        - group "Brands" [ref=e168]:
          - generic [ref=e169]: Brands
          - generic [ref=e171]:
            - checkbox "ForgeFlex Tools" [ref=e172]
            - text: ForgeFlex Tools
          - generic [ref=e174]:
            - checkbox "MightyCraft Hardware" [ref=e175]
            - text: MightyCraft Hardware
        - heading "Sustainability:" [level=4] [ref=e177]
        - group "Eco-Friendly Products" [ref=e178]:
          - generic [ref=e179]: Eco-Friendly Products
          - generic [ref=e181]:
            - checkbox "Show only eco-friendly products" [ref=e182]
            - text: Show only eco-friendly products
      - 'link "Wood Saw ECO Compare Wood Saw CO₂: A B C D E $12.18" [ref=e185]':
        - /url: /product/01KXQRA741BNFQ2JCM58QE9S83
        - generic [ref=e186]:
          - img "Wood Saw" [ref=e187]
          - generic [ref=e188]:
            - img [ref=e190]
            - text: ECO
          - button "Compare" [ref=e192] [cursor=pointer]:
            - img [ref=e194]
        - generic [ref=e196]:
          - heading "Wood Saw" [level=5] [ref=e197]
          - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e198]:
            - text: "CO₂:"
            - generic [ref=e199]: A
            - generic [ref=e200]: B
            - generic [ref=e201]: C
            - generic [ref=e202]: D
            - generic [ref=e203]: E
        - generic [ref=e205]: $12.18
  - contentinfo [ref=e207]:
    - generic [ref=e208]:
      - text: This is a DEMO application (
      - link "GitHub repo" [ref=e209]:
        - /url: https://github.com/testsmith-io/practice-software-testing
      - text: ), used for software testing training purpose. |
      - link "Privacy Policy" [ref=e210]:
        - /url: /privacy
      - text: "| Banner photo by"
      - link "Barn Images" [ref=e211]:
        - /url: https://unsplash.com/@barnimages
      - text: "on"
      - link "Unsplash" [ref=e212]:
        - /url: https://unsplash.com/photos/t5YUoHW6zRo
      - text: .
    - generic [ref=e213]: v2.3 | Built 2026-07-06 | Angular 20.0.5
  - button "Open chat" [ref=e215] [cursor=pointer]:
    - img [ref=e216]
```

# Test source

```ts
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
  113 |       console.log('➡️', request.method(), request.url());
  114 |     });
  115 | 
  116 |     // 2. Select Hand Saw from hand tools
  117 |     await test.step('Select Hand Saw category', async () => {
  118 |       await homePage.selectCategoryByName('Hand Saw');
  119 |     });
  120 |     await expect(page.getByLabel('Hand Saw')).toBeChecked();
  121 |     page.on('request', request => {
  122 |       if (request.url().includes('/products')) {
  123 |         console.log(request.method(), request.url());
  124 |       }
  125 |     });
  126 | 
  127 |     // 3. Check if filtered products are displayed
  128 |     await expect(homePage.productCards.first()).toContainText('Saw');
  129 |     const handSawProductCount = await homePage.productCards.count();
  130 |     await expect(handSawProductCount).toBeGreaterThan(0);
  131 |     await test.step(`Hand Saw product count: ${handSawProductCount}`, async () => {});
  132 | 
  133 |     // 4. Select Power tools checkbox
  134 |     await test.step('Select Power Tools category', async () => {
  135 |       await homePage.selectCategoryByName('Power Tools');
  136 |     });
  137 |     await expect(page.getByLabel('Power Tools')).toBeChecked();
> 138 |     await test.step(async () => {
      |     ^ TypeError: body is not a function
  139 |       console.log(await page.getByLabel('Power Tools').isChecked());
  140 |     });
  141 | 
  142 |     // 5. Select Forgeflex tools under brand filter
  143 |     await test.step('Select ForgeFlex Tools brand', async () => {
  144 |       await homePage.selectBrandByName('ForgeFlex Tools');
  145 |     });
  146 |     await expect(page.getByLabel('ForgeFlex Tools')).toBeChecked();
  147 |     console.log(await page.getByLabel('ForgeFlex Tools').isChecked());
  148 | 
  149 |      await expect(async () => {
  150 |       expect(await homePage.productCards.count()).toBe(4);
  151 |     }).toPass();
  152 | 
  153 |     // 6. Check for filtered results
  154 |     const filteredProductCount = await homePage.productCards.count();
  155 |     await expect(filteredProductCount).toBeGreaterThan(0);
  156 |     await test.step(`Filtered product count: ${filteredProductCount}`, async () => {});
  157 | 
  158 |     // 7. Check the filtered product card has name and price
  159 |     for (let i = 0; i < filteredProductCount; i++) {
  160 |       const productCard = homePage.productCards.nth(i);
  161 |       await productCard.waitFor({ state: 'visible' });
  162 | 
  163 |       await expect(
  164 |         productCard.getByTestId('product-name')
  165 |       ).not.toBeEmpty();
  166 | 
  167 |       await expect(
  168 |         productCard.getByTestId('product-price')
  169 |       ).toHaveText(/\$\d+\.\d{2}/);
  170 |     }
  171 | 
  172 |     // 8. Apply sorting - Name (A - Z)
  173 |     await test.step('Sort by Name (A - Z)', async () => {
  174 |       await homePage.selectSortOption('name,asc');
  175 |       const namesAsc = await homePage.getProductNames();
  176 |       const sortedNamesAsc = [...namesAsc].sort((a, b) => a.localeCompare(b));
  177 |       await expect(namesAsc).toEqual(sortedNamesAsc);
  178 |     });
  179 | 
  180 |     // 9. Apply sorting - Name (Z - A)
  181 |     await test.step('Sort by Name (Z - A)', async () => {
  182 |       await homePage.selectSortOption('name,desc');
  183 |       const namesDesc = await homePage.getProductNames();
  184 |       const sortedNamesDesc = [...namesDesc].sort((a, b) => b.localeCompare(a));
  185 |       await expect(namesDesc).toEqual(sortedNamesDesc);
  186 |     });
  187 | 
  188 |     // 10. Apply sorting - Price (High - Low)
  189 |     await test.step('Sort by Price (High - Low)', async () => {
  190 |       await homePage.selectSortOption('price,desc');
  191 |         const pricesDesc = await homePage.getProductPrices();
  192 |         const sortedPricesDesc = [...pricesDesc].sort((a, b) => b - a);
  193 |         await expect(pricesDesc).toEqual(sortedPricesDesc);
  194 |     });
  195 | 
  196 |     // 11. Apply sorting - Price (Low - High)
  197 |     await test.step('Sort by Price (Low - High)', async () => {
  198 |       await homePage.selectSortOption('price,asc');
  199 |         const pricesAsc = await homePage.getProductPrices();
  200 |         const sortedPricesAsc = [...pricesAsc].sort((a, b) => a - b);
  201 |         await expect(pricesAsc).toEqual(sortedPricesAsc);
  202 |     });
  203 |   });
  204 | });
```