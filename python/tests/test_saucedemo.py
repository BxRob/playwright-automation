from playwright.sync_api import Page, expect
from pages.inventory_page import InventoryPage
from pages.login_page import LoginPage
from pages.cart_page import CartPage
from pages.checkout_page import CheckoutPage


def test_saucedemo_smoke_test(page: Page):
    login_page = LoginPage(page)
    inventory_page = InventoryPage(page)
    cart_page = CartPage(page)
    checkout_page = CheckoutPage(page)

    page.goto("https://www.saucedemo.com/")

    expect(page.get_by_text("Swag Labs")).to_be_visible()

    login_page.login("standard_user", "secret_sauce")

    inventory_page.verify_inventory_page()
    inventory_page.add_backpack_to_cart()
    inventory_page.open_cart()

    cart_page.verify_cart_page()
    cart_page.verify_backpack_in_cart()
    cart_page.proceed_to_checkout()

    checkout_page.verify_checkout_page()
    checkout_page.enter_checkout_information(
        first_name="John", last_name="Doe", postal_code="12345"
    )
    checkout_page.continue_checkout()
    checkout_page.verify_checkout_overview_page()
    checkout_page.finish_checkout()
    checkout_page.verify_checkout_complete_page()
