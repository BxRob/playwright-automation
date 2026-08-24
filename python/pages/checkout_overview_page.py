from playwright.sync_api import Locator, Page, expect
import allure


class CheckoutOverviewPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.finish_button: Locator = page.get_by_role("button", name="Finish")

    def finish_checkout(self):
        self.finish_button.click()
