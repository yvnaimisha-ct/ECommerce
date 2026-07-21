import { test, expect } from '@playwright/test';
import { LoginPage } from '../playwright/pageobjects/loginpage';

const VALID_EMAIL = 'customer@practicesoftwaretesting.com';
const VALID_PASSWORD = 'welcome01';

test.describe('Login', () => {
  test('@smoke should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to login page', async () => {
      await loginPage.goto();
    });

    await test.step('Login with valid credentials', async () => {
      await loginPage.validLogin(VALID_EMAIL, VALID_PASSWORD);
    });

    await test.step('Verify successful login', async () => {
      await expect(page).toHaveURL(/\/account/);
      await expect(page.getByTestId('nav-profile')).toBeVisible();
    });
  });

  test('should show error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.invalidLogin('invalid@test.com', 'wrongpassword');

    await expect(loginPage.invalidCredentialsMessage).toBeVisible();
    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(loginPage.loginForm).toBeVisible();
  });
});

test.describe('Logout', () => {
    test('User should logout successfully', async ({ page }) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.goto();
      await loginPage.validLogin(VALID_EMAIL, VALID_PASSWORD);
  
      await expect(page).toHaveURL(/\/account/);
      await loginPage.clickLogout();
    });
    test('Forgot password - User should navigate to forgot password page', async ({ page }) => {
        const loginPage = new LoginPage(page);
    
        await loginPage.goto();
        await loginPage.validLogin(VALID_EMAIL, VALID_PASSWORD);
        await loginPage.clickForgotPassword();
        await expect(page).toHaveURL(/\/account/);
        await loginPage.clickLogout();
        
      });
  });
