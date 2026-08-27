import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly inventoryItemName: Locator;
    readonly shoppingCartBadge: Locator;
    readonly checkoutButton: Locator;

    constructor(private page: Page) {
        this.inventoryItemName = page.getByTestId('inventory-item-name');
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
        this.checkoutButton = page.getByTestId('checkout');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}