from playwright.sync_api import Locator, Page, expect
import allure


class CheckoutOverviewPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.finish_button: Locator = page.get_by_role("button", name="Finish")

    def verify_checkout_overview_page(self):
        with allure.step("Verify checkout overview page"):
            expect(self.page).to_have_url(
                "https://www.saucedemo.com/checkout-step-two.html"
            )

    def finish_checkout(self):
        with allure.step("Finish checkout"):
            self.finish_button.click()
