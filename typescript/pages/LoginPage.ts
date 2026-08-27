import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly usernameField: Locator;
    readonly passwordField: Locator; 
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}