import { Page, Locator, expect, test } from '@playwright/test';

export class CheckoutPage {
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;

    constructor(private page: Page) {
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.postalCodeField = page.getByPlaceholder('Zip/Postal Code');

        this.continueButton = page.getByTestId('continue');
        this.finishButton = page.getByTestId('finish');
    }

    async enterInformation(firstName: string, lastName: string, postalCode: string) {
        await test.step('Enter checkout information', async () => {
            await this.firstNameField.fill(firstName);
            await this.lastNameField.fill(lastName);
            await this.postalCodeField.fill(postalCode);
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
            await this.finishButton.click();
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