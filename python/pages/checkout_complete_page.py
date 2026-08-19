from playwright.sync_api import Locator, Page, expect
import allure


class CheckoutCompletePage:

    def __init__(self, page: Page):
        self.page: Page = page

    def verify_checkout_complete_page(self):
        with allure.step("Verify checkout complete page"):
            expect(self.page).to_have_url(
                "https://www.saucedemo.com/checkout-complete.html"
            )
