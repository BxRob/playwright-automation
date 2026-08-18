from playwright.sync_api import Locator, Page, expect
import allure


class CartPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.cart_link: Locator = page.locator('[data-test="shopping-cart-link"]')
        self.item_name: Locator = page.locator('[data-test="inventory-item-name"]')

    def verify_cart_page(self):
        with allure.step("Verify cart page is displayed"):
            expect(self.page).to_have_url("https://www.saucedemo.com/cart.html")

    def verify_backpack_in_cart(self):
        with allure.step("Verify Sauce Labs Backpack is in cart"):
            expect(self.item_name).to_have_text("Sauce Labs Backpack")

    def proceed_to_checkout(self):
        with allure.step("Proceed to checkout"):
            self.page.get_by_role("button", name="Checkout").click()
