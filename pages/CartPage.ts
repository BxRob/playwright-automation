import { Page, expect, test } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) { }

    async verifyCartURL() {
        await test.step('Verify cart URL', async () => {
            await expect(this.page).toHaveURL(/cart.html/);
        });
    }

    async checkInventoryItem() {
        await test.step('Verify inventory item in cart', async () => {
            await expect(
                this.page.locator('[data-test="inventory-item-name"]'))
                .toHaveText('Sauce Labs Backpack');

            await expect(
                this.page.locator('[data-test="shopping-cart-badge"]')
            ).toHaveText('1');
        });
    }

    async clickCheckout() {
        await test.step('Click checkout button', async () => {
            await this.page
                .locator('[data-test="checkout"]')
                .click();
        });
    }
}