const { test, expect, chromium } = require("@playwright/test");
const { userLogin, userPassword } = require("../user.js");

test("Valid login page", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://netology.ru/?modal=sign_in");
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/login_page.png",
        type: "png"
    });
    await page.getByText("Другие способы входа").click();
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/other_login.png",
        type: "png"
    });
    await page.getByText("Войти по почте").click();
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/login_of_email.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Email" }).click();
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/selected_email.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Email" }).fill(userLogin);
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/input_email.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Пароль" }).click();
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/selected_password.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Пароль" }).fill(userPassword);
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/input_password.png",
        type: "png"
    });
    await page.getByTestId("login-submit-btn").click();

    await expect(
        page
            .locator("[data-testid='advanced-iframe']")
            .contentFrame()
            .getByText("Press in the following order:")
    ).toBeVisible();
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/check_captcha.png",
        type: "png"
    });
});

test("Invalid login with invalid userData", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData//login_page.png",
        type: "png"
    });
    await page.getByText("Другие способы входа").click();
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/other_login.png",
        type: "png"
    });
    await page.getByText("Войти по почте").click();
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/login_of_email.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Email" }).click();
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/selected_email.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Email" }).fill(userLogin + "!");
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/input_email.png",
        type: "png"
    });
    await page.getByRole("textbox", { name: "Пароль" }).click();
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/selected_password.png",
        type: "png"
    });
    await expect(page.locator(".Input_error__R_3Gz")).toContainText(
        "Неверный email"
    );
    await expect(page.getByText("Неверный email")).toBeVisible();
    await page.screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/error_page.png",
        type: "png"
    });
});
