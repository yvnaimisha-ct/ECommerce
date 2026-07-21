import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginForm: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly invalidCredentialsMessage: Locator;
  readonly logoutDropdownMenu: Locator;
  readonly logoutButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly forgotPasswordForm_EmailInput: Locator;
  readonly forgotPasswordForm_SetNewPassword: Locator;
  readonly forgotPasswordSuccessMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.loginForm = page.getByTestId('login-form');
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-submit');
    this.invalidCredentialsMessage = page.getByText('Invalid email or password'); 
    this.logoutDropdownMenu = page.locator('//button[@id="menu"]');
    this.logoutButton = page.locator('//a[normalize-space()="Sign out"]');
    this.forgotPasswordLink = page.getByTestId('forgot-password-link');
    this.forgotPasswordForm_EmailInput = page.locator('//input[@id="email"]');
    this.forgotPasswordForm_SetNewPassword = page.locator('//input[@value="Set New Password"]');
    this.forgotPasswordSuccessMessage = page.locator('[role="alert"].alert.alert-success');
  }

  async goto() {
    await this.page.goto('/auth/login');
    await this.loginForm.waitFor({ state: 'visible' });
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickValidLogin() {
    await this.loginButton.click();
    await this.page.waitForURL('https://practicesoftwaretesting.com/account');
  }
  async clickInvalidLogin() {
    await this.loginButton.click();
  }

  async validLogin(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickValidLogin();
  }
  async invalidLogin(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickInvalidLogin();
  }
  async clickLogout() {
    await this.logoutDropdownMenu.click();
    await this.logoutButton.click();
    await this.page.waitForURL('https://practicesoftwaretesting.com/auth/login');
  }
  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
    await this.page.waitForURL('https://practicesoftwaretesting.com/auth/forgot-password');
  }

  async fillForgotPasswordEmail(email: string) {
    await this.forgotPasswordForm_EmailInput.fill(email);
  }

  async clickSetNewPassword() {
    await this.forgotPasswordForm_SetNewPassword.click();
  }
}
