from playwright.sync_api import Page, expect
import allure

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
        with allure.step("Open shopping cart"):
            self.cart_link.click()

    def verify_cart_page(self):
        with allure.step("Verify cart page is displayed"):
            expect(self.page).to_have_url(
            "https://www.saucedemo.com/cart.html"
        )

    def verify_backpack_in_cart(self):
        with allure.step("Verify Sauce Labs Backpack is in cart"):
            expect(self.item_name).to_have_text(
                "Sauce Labs Backpack"
            )

    def proceed_to_checkout(self):
        with allure.step("Proceed to checkout"):
            self.page.get_by_role(
                "button", name="Checkout"
            ).click()