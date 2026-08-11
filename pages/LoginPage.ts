import { Page, Locator, test } from '@playwright/test';

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
        await test.step('Fill Username field', async () => {
            await this.username.fill(username);
        });

        await test.step('Fill Password field', async () => {
            await this.password.fill(password);
        });

        await test.step('Click Login button', async () => {
            await this.loginButton.click();
        });
    }
}