from playwright.sync_api import Locator, Page
import allure


class LoginPage:

    def __init__(self, page: Page):
        self.page: Page = page
        self.usernameField: Locator = page.get_by_role("textbox", name="Username")
        self.passwordField: Locator = page.get_by_role("textbox", name="Password")
        self.loginButton: Locator = page.get_by_role("button", name="Login")

    def login(self, username: str, password: str):
            self.usernameField.fill(username)
            self.passwordField.fill(password)
            self.loginButton.click()
