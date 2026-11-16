import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private usernameInput = this.page.locator("//input[@id='username']");
    private passwordInput = this.page.locator("//input[@id='password']");
    private loginButton = this.page.locator("//button[@id='kc-login']");

    private sessionClosedContinueButton = this.page.getByRole("button", { name: "Tiếp tục" });
    private dashboardMenu = this.page.locator(".dashboard-menu");

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);
        await this.loginButton.click();

        await this.sessionClosedContinueButton.or(this.dashboardMenu).first().waitFor({ timeout: 30000 });
        if (await this.sessionClosedContinueButton.isVisible()) {
            await this.sessionClosedContinueButton.click();
        }

    }

    async verifyLoginSuccess() {
        await this.verifyUrl(/\/vi\/dashboard\/all/, 30000);

    }

}
