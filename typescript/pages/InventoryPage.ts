import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly inventoryContainer: Locator;
    readonly backpackAddToCart: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;

    constructor(private page: Page) {
        this.inventoryContainer = page.getByTestId('inventory-container');
        this.backpackAddToCart = page.getByTestId(
            'add-to-cart-sauce-labs-backpack'
        );
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
        this.shoppingCartLink = page.getByTestId('shopping-cart-link');
    }

    async addBackpackToCart() {
        await this.backpackAddToCart.click();
    }

    async openCart() {
        await this.shoppingCartLink.click();
    }
}