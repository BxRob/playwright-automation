import { Page, Locator, test } from '@playwright/test';

export class LoginPage {
    readonly usernameField: Locator;
    readonly passwordField:Locator; 
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await test.step('Fill Username field', async () => {
            await this.usernameField.fill(username);
        });

        await test.step('Fill Password field', async () => {
            await this.passwordField.fill(password);
        });

        await test.step('Click Login button', async () => {
            await this.loginButton.click();
        });
    }
}