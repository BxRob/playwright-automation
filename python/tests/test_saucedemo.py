import allure
from playwright.sync_api import Page, expect
from pages.inventory_page import InventoryPage
from pages.login_page import LoginPage
from pages.cart_page import CartPage
from pages.checkout_information_page import CheckoutInformationPage
from pages.checkout_overview_page import CheckoutOverviewPage
from pages.checkout_complete_page import CheckoutCompletePage


def test_saucedemo_smoke_test(page: Page):
    login_page = LoginPage(page)
    inventory_page = InventoryPage(page)
    cart_page = CartPage(page)
    checkout_information_page = CheckoutInformationPage(page)
    checkout_overview_page = CheckoutOverviewPage(page)

    with allure.step("Navigate to SauceDemo website"):
        page.goto("https://www.saucedemo.com/")

    with allure.step("Validate that the page has loaded"):
        expect(page.get_by_text("Swag Labs")).to_be_visible()

    with allure.step("Login as standard user"):
        login_page.login("standard_user", "secret_sauce")

    with allure.step("Verify that the inventory page is displayed"):
        expect(page).to_have_url("https://www.saucedemo.com/inventory.html")
        expect(inventory_page.item_container).to_be_visible()

    with allure.step("Add Sauce Labs Backpack to cart"):
        inventory_page.add_backpack_to_cart()
    with allure.step("Verify shopping cart badge"):
        expect(inventory_page.shopping_cart_badge).to_have_text("1")

    with allure.step("Open shopping cart"):
        inventory_page.open_cart()

    with allure.step("Verify that the cart page is displayed"):
        expect(page).to_have_url("https://www.saucedemo.com/cart.html")
        expect(cart_page.item_name).to_have_text("Sauce Labs Backpack")

    with allure.step("Proceed to checkout"):
        cart_page.proceed_to_checkout()

    with allure.step("Verify that the checkout information page is displayed"):
        expect(page).to_have_url("https://www.saucedemo.com/checkout-step-one.html")
        expect(checkout_information_page.first_name_field).to_be_visible()

    with allure.step("Enter checkout information"):
        checkout_information_page.enter_checkout_information(
            first_name="John", last_name="Doe", postal_code="12345"
        )
    checkout_information_page.continue_checkout()

    with allure.step("Verify that the checkout overview page is displayed"):
        expect(page).to_have_url("https://www.saucedemo.com/checkout-step-two.html")
        expect(checkout_overview_page.finish_button).to_be_visible()

    with allure.step("Finish checkout"):
        checkout_overview_page.finish_checkout()

    with allure.step("Verify that the checkout complete page is displayed"):
        expect(page).to_have_url("https://www.saucedemo.com/checkout-complete.html")
