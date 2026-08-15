import { Page, Locator, expect, test } from '@playwright/test';

export class InventoryPage {
    readonly inventoryContainer: Locator;
    readonly backpackAddToCart: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;

    constructor(private page: Page) {
        this.inventoryContainer = page.getByTestId('inventory-container');
        this.backpackAddToCart = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
        this.shoppingCartLink = page.getByTestId('shopping-cart-link');
    }

    async verifyInventoryPage() {
        await test.step('Verify inventory page is displayed', async () => {
            await expect(
                this.page,
                'Expected the URL to contain inventory.html'
            ).toHaveURL(/inventory.html/);

            await expect(
                this.inventoryContainer,
                'Expected the inventory container to be visible'
            ).toBeVisible();
        });
    }

    async addBackpackToCart() {
        await test.step('Add Sauce Labs Backpack to cart', async () => {
            await this.backpackAddToCart.click();
        });

        await test.step('Verify cart contains one item', async () => {
            await expect(
                this.shoppingCartBadge,
                'Expected the shopping cart badge to display 1'
            ).toHaveText('1');
        });
    }

    async openCart() {
        await test.step('Open shopping cart', async () => {
            await this.shoppingCartLink.click();
        });
    }
}