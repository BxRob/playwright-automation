import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async verifyCartURL() {
        await expect(this.page).toHaveURL(/cart.html/);
    }

    async checkInventoryItem() {
        await expect(
            this.page.locator('[data-test="inventory-item-name"]'))
        .toHaveText('Sauce Labs Backpack');

        await expect(
            this.page.locator('[data-test="shopping-cart-badge"]')
        ).toHaveText('1');
    }

    async clickCheckout() {
        await this.page
            .locator('[data-test="checkout"]')
        .click();
    }
}