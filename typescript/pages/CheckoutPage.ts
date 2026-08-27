import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly totalLabel: Locator;
    readonly checkoutCompleteContainer: Locator;

    constructor(private page: Page) {
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.postalCodeField = page.getByPlaceholder('Zip/Postal Code');

        this.continueButton = page.getByTestId('continue');
        this.finishButton = page.getByTestId('finish');

        this.totalLabel = page.getByTestId('total-label');
        this.checkoutCompleteContainer = page.getByTestId(
            'checkout-complete-container'
        );
    }

    async enterInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}