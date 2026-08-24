from playwright.sync_api import Locator, Page, expect
import allure


class CheckoutCompletePage:

    def __init__(self, page: Page):
        self.page: Page = page
