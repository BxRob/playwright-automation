from playwright.sync_api import Page, expect
import logging

logger = logging.getLogger(__name__)

class CheckoutPage:

    def __init__(self, page: Page):
        self.page = page
        self.first_name = page.locator('[data-test="firstName"]')
        self.last_name = page.locator('[data-test="lastName"]')
        self.postal_code = page.locator('[data-test="postalCode"]')
        self.continue_button = page.get_by_role(
            "button", name="Continue"
        )

    def verify_checkout_page(self):
        logger.info("Verifying checkout page")
        expect(self.page).to_have_url(
            "https://www.saucedemo.com/checkout-step-one.html"
        )

    def enter_checkout_information(
        self,
        first_name: str,
        last_name: str,
        postal_code: str
    ):
        logger.info("Entering checkout information")
        self.first_name.fill(first_name)
        self.last_name.fill(last_name)
        self.postal_code.fill(postal_code)

    def continue_checkout(self):
        logger.info("Continuing checkout")
        self.continue_button.click()

    def verify_checkout_overview_page(self):
        logger.info("Verifying checkout overview page")
        expect(self.page).to_have_url(
            "https://www.saucedemo.com/checkout-step-two.html"
        )

    def finish_checkout(self):
        logger.info("Finishing checkout")
        self.page.get_by_role(
            "button", name="Finish"
        ).click()

    def verify_checkout_complete_page(self):
        logger.info("Verifying checkout complete page")
        expect(self.page).to_have_url(
            "https://www.saucedemo.com/checkout-complete.html"
        )