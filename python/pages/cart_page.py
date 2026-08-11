from playwright.sync_api import Page, expect


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
        self.cart_link.click()

    def verify_cart_page(self):
        expect(self.page).to_have_url(
            "https://www.saucedemo.com/cart.html"
        )

    def verify_backpack_in_cart(self):
        expect(self.item_name).to_have_text(
            "Sauce Labs Backpack"
        )