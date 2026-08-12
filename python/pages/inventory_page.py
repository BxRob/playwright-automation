from playwright.sync_api import Page, expect
import logging

logger = logging.getLogger(__name__)

class InventoryPage:

    def __init__(self, page: Page):
        self.page = page
        self.item_container = page.locator(
            '[data-test="inventory-container"]'
        )
        self.shopping_cart_badge = page.locator(
            '[data-test="shopping-cart-badge"]'
        )
        self.shopping_cart_link = page.locator(
            '[data-test="shopping-cart-link"]'
        )
        self.backpack_button = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        )

    def verify_inventory_page(self):
        logger.info("Verifying inventory page")
        expect(self.page).to_have_url(
            "https://www.saucedemo.com/inventory.html"
        )
        expect(self.item_container).to_be_visible()

    def add_backpack_to_cart(self):
        logger.info("Adding backpack to cart")
        self.backpack_button.click()

        expect(self.shopping_cart_badge).to_have_text("1")

    def open_cart(self):
        logger.info("Opening cart")
        self.shopping_cart_link.click()
