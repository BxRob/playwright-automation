import { Page, Locator } from '@playwright/test';

export class LoginPage {
    username: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}