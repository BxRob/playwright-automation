from playwright.sync_api import Locator, Page, expect
import allure


class InventoryPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.item_container: Locator = page.locator('[data-test="inventory-container"]')
        self.shopping_cart_badge: Locator = page.locator('[data-test="shopping-cart-badge"]')
        self.shopping_cart_link: Locator = page.locator('[data-test="shopping-cart-link"]')
        self.backpack_button: Locator = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')

    def add_backpack_to_cart(self):
        self.backpack_button.click()

    def open_cart(self):
        self.shopping_cart_link.click()
