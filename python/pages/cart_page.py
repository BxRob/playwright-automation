from playwright.sync_api import Locator, Page, expect
import allure


class CartPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.cart_link: Locator = page.locator('[data-test="shopping-cart-link"]')
        self.item_name: Locator = page.locator('[data-test="inventory-item-name"]')
        self.checkout_button: Locator = page.get_by_role("button", name="Checkout")

    def proceed_to_checkout(self):
        with allure.step("Proceed to checkout"):
            self.checkout_button.click()
