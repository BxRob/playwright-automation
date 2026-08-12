from playwright.sync_api import Page, expect
import logging

logger = logging.getLogger(__name__)

class CartPage:

    def __init__(self, page: Page):
        self.page = page
        self.cart_link = page.locator(
            '[data-test="shopping-cart-link"]'
        )
        self.item_name = page.locator(
            '[data-test="inventory-item-name"]'
        )

    def open_cart(self):
        logger.info("Opening cart")
        self.cart_link.click()

    def verify_cart_page(self):
        logger.info("Verifying cart page")
        expect(self.page).to_have_url(
            "https://www.saucedemo.com/cart.html"
        )

    def verify_backpack_in_cart(self):
        logger.info("Verifying backpack is in cart")
        expect(self.item_name).to_have_text(
            "Sauce Labs Backpack"
        )

    def proceed_to_checkout(self):
        logger.info("Proceeding to checkout")
        self.page.get_by_role(
            "button", name="Checkout"
        ).click()