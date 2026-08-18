from playwright.sync_api import Page, expect
import allure


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
        with allure.step("Verify inventory page is displayed"):
            expect(self.page).to_have_url(
                "https://www.saucedemo.com/inventory.html"
            )
            expect(self.item_container).to_be_visible()

    def add_backpack_to_cart(self):
        with allure.step("Add Sauce Labs Backpack to cart"):
            self.backpack_button.click()

        with allure.step("Verify cart contains one item"):
            expect(self.shopping_cart_badge).to_have_text("1")

    def open_cart(self):
        with allure.step("Open shopping cart"):
            self.shopping_cart_link.click()