# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Logout >> Forgot password - User should navigate to forgot password page
- Location: tests/login.spec.ts:47:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('forgot-password-link')

```

# Page snapshot

```yaml
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
            - menuitem "Jane Doe" [ref=e40]:
              - button "Jane Doe" [ref=e41] [cursor=pointer]
          - button "Select language" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: EN
  - generic [ref=e48]:
    - heading "My account" [level=1] [ref=e49]
    - paragraph [ref=e50]: Here you can manage your profile, favorites and orders.
    - generic [ref=e51]:
      - button "Favorites" [ref=e52] [cursor=pointer]:
        - img [ref=e54]
        - text: Favorites
      - button "Profile" [ref=e56] [cursor=pointer]:
        - img [ref=e58]
        - text: Profile
      - button "Invoices" [ref=e60] [cursor=pointer]:
        - img [ref=e62]
        - text: Invoices
      - button "Messages" [ref=e64] [cursor=pointer]:
        - img [ref=e66]
        - text: Messages
  - contentinfo [ref=e69]:
    - generic [ref=e70]:
      - text: This is a DEMO application (
      - link "GitHub repo" [ref=e71] [cursor=pointer]:
        - /url: https://github.com/testsmith-io/practice-software-testing
      - text: ), used for software testing training purpose. |
      - link "Privacy Policy" [ref=e72] [cursor=pointer]:
        - /url: /privacy
      - text: "| Banner photo by"
      - link "Barn Images" [ref=e73] [cursor=pointer]:
        - /url: https://unsplash.com/@barnimages
      - text: "on"
      - link "Unsplash" [ref=e74] [cursor=pointer]:
        - /url: https://unsplash.com/photos/t5YUoHW6zRo
      - text: .
    - generic [ref=e75]: v2.3 | Built 2026-07-06 | Angular 20.0.5
  - button "Open chat" [ref=e77] [cursor=pointer]:
    - img [ref=e78]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly loginForm: Locator;
  6  |   readonly emailInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly loginButton: Locator;
  9  |   readonly invalidCredentialsMessage: Locator;
  10 |   readonly logoutDropdownMenu: Locator;
  11 |   readonly logoutButton: Locator;
  12 |   readonly forgotPasswordLink: Locator;
  13 |   readonly forgotPasswordForm_EmailInput: Locator;
  14 |   readonly forgotPasswordForm_SetNewPassword: Locator;
  15 |   readonly forgotPasswordSuccessMessage: Locator;
  16 | 
  17 | 
  18 |   constructor(page: Page) {
  19 |     this.page = page;
  20 |     this.loginForm = page.getByTestId('login-form');
  21 |     this.emailInput = page.getByTestId('email');
  22 |     this.passwordInput = page.getByTestId('password');
  23 |     this.loginButton = page.getByTestId('login-submit');
  24 |     this.invalidCredentialsMessage = page.getByText('Invalid email or password'); 
  25 |     this.logoutDropdownMenu = page.locator('//button[@id="menu"]');
  26 |     this.logoutButton = page.locator('//a[normalize-space()="Sign out"]');
  27 |     this.forgotPasswordLink = page.getByTestId('forgot-password-link');
  28 |     this.forgotPasswordForm_EmailInput = page.locator('//input[@id="email"]');
  29 |     this.forgotPasswordForm_SetNewPassword = page.locator('//input[@value="Set New Password"]');
  30 |     this.forgotPasswordSuccessMessage = page.locator('[role="alert"].alert.alert-success');
  31 |   }
  32 | 
  33 |   async goto() {
  34 |     await this.page.goto('/auth/login');
  35 |     await this.loginForm.waitFor({ state: 'visible' });
  36 |   }
  37 | 
  38 |   async fillEmail(email: string) {
  39 |     await this.emailInput.fill(email);
  40 |   }
  41 | 
  42 |   async fillPassword(password: string) {
  43 |     await this.passwordInput.fill(password);
  44 |   }
  45 | 
  46 |   async clickValidLogin() {
  47 |     await this.loginButton.click();
  48 |     await this.page.waitForURL('https://practicesoftwaretesting.com/account');
  49 |   }
  50 |   async clickInvalidLogin() {
  51 |     await this.loginButton.click();
  52 |   }
  53 | 
  54 |   async validLogin(email: string, password: string) {
  55 |     await this.fillEmail(email);
  56 |     await this.fillPassword(password);
  57 |     await this.clickValidLogin();
  58 |   }
  59 |   async invalidLogin(email: string, password: string) {
  60 |     await this.fillEmail(email);
  61 |     await this.fillPassword(password);
  62 |     await this.clickInvalidLogin();
  63 |   }
  64 |   async clickLogout() {
  65 |     await this.logoutDropdownMenu.click();
  66 |     await this.logoutButton.click();
  67 |     await this.page.waitForURL('https://practicesoftwaretesting.com/auth/login');
  68 |   }
  69 |   async clickForgotPassword() {
> 70 |     await this.forgotPasswordLink.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  71 |     await this.page.waitForURL('https://practicesoftwaretesting.com/auth/forgot-password');
  72 |   }
  73 | 
  74 |   async fillForgotPasswordEmail(email: string) {
  75 |     await this.forgotPasswordForm_EmailInput.fill(email);
  76 |   }
  77 | 
  78 |   async clickSetNewPassword() {
  79 |     await this.forgotPasswordForm_SetNewPassword.click();
  80 |   }
  81 | }
  82 | 
```