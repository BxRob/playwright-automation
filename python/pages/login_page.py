from playwright.sync_api import Locator, Page
import allure


class LoginPage:

    def __init__(self, page: Page):
        self.page: Locator = page
        self.username: Locator = page.get_by_role("textbox", name="Username")
        self.password: Locator = page.get_by_role("textbox", name="Password")
        self.login_button: Locator = page.get_by_role("button", name="Login")

    def login(self, username: str, password: str):
        with allure.step(f"Login as {username}"):
            self.username.fill(username)
            self.password.fill(password)
            self.login_button.click()
