import { Page, Locator, expect, test } from '@playwright/test';

export class CheckoutPage {
    firstName: Locator;
    lastName: Locator;
    postalCode: Locator;
    continueButton: Locator;

    constructor(private page: Page) {
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    async enterInformation(firstName: string, lastName: string, postalCode: string) {
        await test.step('Enter checkout information', async () => {
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.postalCode.fill(postalCode);
            await this.continueButton.click();
        });
    }

    async verifyCheckoutURL(url: string) {
        await test.step('Verify checkout URL', async () => {
            await expect(this.page).toHaveURL(url);
        });
    }

    async verifyTotalIsDisplayed() {
        await test.step('Verify total is displayed', async () => {
            await expect(
                this.page.locator('[data-test="total-label"]'))
                .toBeVisible();
        });
    }

    async clickFinish() {
        await test.step('Click finish button', async () => {
            await this.page
                .locator('[data-test="finish"]')
                .click();
        });
    }

    async verifyCheckoutComplete() {
        await test.step('Verify checkout is complete', async () => {
            await expect(
                this.page
                    .locator('[data-test="checkout-complete-container"]'))
                .toBeVisible();
        });
    }
}