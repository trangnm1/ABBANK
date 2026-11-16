import { test } from "../../src/web/fixtures/test.fixture";
import { loginData } from "../../test-data/user.data";

test("Login successfully", async ({
    loginPage
}) => {

    await loginPage.goto(
        "/vi/dashboard/all"
    );

    await loginPage.login(loginData.valid.username, loginData.valid.password);
    await loginPage.verifyLoginSuccess();

});

