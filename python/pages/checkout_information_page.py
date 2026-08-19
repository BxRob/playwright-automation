from playwright.sync_api import Locator, Page, expect
import allure


class CheckoutInformationPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.first_name_field: Locator = page.locator('[data-test="firstName"]')
        self.last_name_field: Locator = page.locator('[data-test="lastName"]')
        self.postal_code_field: Locator = page.locator('[data-test="postalCode"]')
        self.continue_button: Locator = page.get_by_role("button", name="Continue")

    def verify_checkout_page(self):
        with allure.step("Verify checkout page is displayed"):
            expect(self.page).to_have_url(
                "https://www.saucedemo.com/checkout-step-one.html"
            )

    def enter_checkout_information(
        self, first_name: str, last_name: str, postal_code: str
    ):
        with allure.step("Enter checkout information"):
            self.first_name_field.fill(first_name)
            self.last_name_field.fill(last_name)
            self.postal_code_field.fill(postal_code)

    def continue_checkout(self):
        with allure.step("Continue checkout"):
            self.continue_button.click()