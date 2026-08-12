from playwright.sync_api import Page
import logging

logger = logging.getLogger(__name__)

class LoginPage:

    def __init__(self, page: Page):
        self.page = page
        self.username = page.get_by_role("textbox", name="Username")
        self.password = page.get_by_role("textbox", name="Password")
        self.login_button = page.get_by_role("button", name="Login")

    def login(self, username: str, password: str):
        logger.info(f"Logging in with username: {username}")
        self.username.fill(username)
        self.password.fill(password)
        self.login_button.click()