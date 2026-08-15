import { Page, Locator, expect, test } from '@playwright/test';

export class CartPage {
    readonly inventoryItemName: Locator;
    readonly shoppingCartBadge: Locator;
    readonly checkoutButton: Locator;

    constructor(private page: Page) {
        this.inventoryItemName = page.getByTestId('inventory-item-name');
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
        this.checkoutButton = page.getByTestId('checkout');
    }

    async verifyCartURL() {
        await test.step('Verify cart URL', async () => {
            await expect(this.page).toHaveURL(/cart.html/);
        });
    }

    async checkInventoryItem() {
        await test.step('Verify inventory item in cart', async () => {
            await expect(
                this.inventoryItemName
            ).toHaveText('Sauce Labs Backpack');

            await expect(
                this.shoppingCartBadge
            ).toHaveText('1');
        });
    }

    async clickCheckout() {
        await test.step('Click checkout button', async () => {
            await this.checkoutButton.click();
        });
    }
}