import { Page, expect, test } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) { }

    async verifyInventoryPage() {
        await test.step('Verify inventory page is displayed', async () => {
            await expect(
                this.page,
                'Expected the URL to contain inventory.html'
            ).toHaveURL(/inventory.html/);

            await expect(
                this.page.locator('[data-test="inventory-container"]'),
                'Expected the inventory container to be visible'
            ).toBeVisible();
        });
    }

    async addBackpackToCart() {
        await test.step('Add Sauce Labs Backpack to cart', async () => {
            await this.page
                .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
                .click();
        });

        await test.step('Verify cart contains one item', async () => {
            await expect(
                this.page.locator('[data-test="shopping-cart-badge"]'),
                'Expected the shopping cart badge to display 1'
            ).toHaveText('1');
        });
    }

    async openCart() {
        await test.step('Open shopping cart', async () => {
            await this.page
                .locator('[data-test="shopping-cart-link"]')
                .click();
        });
    }
}