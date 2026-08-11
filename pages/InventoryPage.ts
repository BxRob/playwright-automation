import { Page, expect } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    async verifyInventoryPage() {
        await expect(this.page).toHaveURL(/inventory.html/);
        await expect(
            this.page.locator('[data-test="inventory-container"]')
        ).toBeVisible();
    }

    async addBackpackToCart() {
        await this.page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();

        await expect(
            this.page.locator('[data-test="shopping-cart-badge"]')
        ).toHaveText('1');
    }

    async openCart() {
        await this.page
            .locator('[data-test="shopping-cart-link"]')
            .click();
    }
}