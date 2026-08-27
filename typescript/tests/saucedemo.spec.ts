import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Sauce Demo Smoke Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');

    await test.step('Verify the Sauce Demo login page displays the "Swag Labs" logo', async () => {
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.getByText('Swag Labs')).toBeVisible();
    });

    await test.step('Login with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
    });

    await test.step('Verify inventory page is displayed', async () => {
        await expect(page).toHaveURL(/inventory.html/);
        await expect(inventoryPage.inventoryContainer).toBeVisible();
    });

    await test.step('Add backpack to cart', async () => {
        await inventoryPage.addBackpackToCart();
    });

    await test.step('Verify shopping cart badge shows 1 item', async () => {
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    });

    await test.step('Open cart', async () => {
        await inventoryPage.openCart();
    });

    await test.step('Verify cart page is displayed', async () => {
        await expect(page).toHaveURL(/cart.html/);
    });

    await test.step('Verify backpack is in cart', async () => {
        await expect(cartPage.inventoryItemName).toHaveText(
            'Sauce Labs Backpack'
        );
    });

    await test.step('Proceed to checkout', async () => {
        await cartPage.clickCheckout();
    });

    await test.step('Verify checkout information page is displayed', async () => {
        await expect(page).toHaveURL(
            'https://www.saucedemo.com/checkout-step-one.html'
        );
    });

    await test.step('Enter checkout information', async () => {
        await checkoutPage.enterInformation('Rob', 'Test', '95065');
    });

    await test.step('Verify checkout overview page is displayed', async () => {
        await expect(page).toHaveURL(
            'https://www.saucedemo.com/checkout-step-two.html'
        );
        await expect(checkoutPage.totalLabel).toBeVisible();
    });

    await test.step('Click finish button', async () => {
        await checkoutPage.clickFinish();
    });

    await test.step('Verify checkout is complete', async () => {
        await expect(checkoutPage.checkoutCompleteContainer).toBeVisible();
    });
});
