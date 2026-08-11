import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Sauce Demo Smoke Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.verifyInventoryPage();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.verifyCartURL();
    await cartPage.checkInventoryItem();
    await cartPage.clickCheckout();

    await page.getByRole('textbox', { name: 'firstname' });
    await page.getByRole('textbox', { name: 'lastname' });
    await page.getByRole('textbox', { name: 'postalCode' });
    await page.locator('[data-test="continue"]').click();
});
