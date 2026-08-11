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

    await test.step('Navigate to the Sauce Demo login page', async () => {
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    await test.step('Verify the Sauce Demo login page displays the "Swag Labs" logo', async () => {
        await expect(page.getByText('Swag Labs')).toBeVisible();
    });

    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.verifyInventoryPage();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.verifyCartURL();
    await cartPage.checkInventoryItem();
    await cartPage.clickCheckout();

    await checkoutPage.verifyCheckoutURL("https://www.saucedemo.com/checkout-step-one.html");
    await checkoutPage.enterInformation('Rob', 'Test', "95065");
    await checkoutPage.verifyCheckoutURL("https://www.saucedemo.com/checkout-step-two.html");
    await checkoutPage.verifyTotalIsDisplayed();
    await checkoutPage.clickFinish();
    await checkoutPage.verifyCheckoutComplete();
});
