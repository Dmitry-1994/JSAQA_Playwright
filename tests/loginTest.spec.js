const { test, expect } = require("@playwright/test");
const { userLogin, userPassword } = require("../user.js");

test("Valid login page", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.click(".styles_otherWays__ruSCf");
    await page.getByText("Войти по почте").click();
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_validLogin/login_page.png",
        type: "png"
    });
    await page.click("[placeholder='Email']");
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_validLogin/selected_email.png",
        type: "png"
    });

    await page.getByRole("textbox", { name: "Email" }).fill(userLogin);
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_validLogin/input_email.png",
        type: "png"
    });

    await page.click("[placeholder='Пароль']");
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_validLogin/selected_password.png",
        type: "png"
    });

    await page.getByRole("textbox", { name: "Пароль" }).fill(userPassword);
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_validLogin/input_password.png",
        type: "png"
    });

    await page.getByTestId("login-submit-btn").click();
    await page.screenshot({
        path: "test-results/screenshots/test_validLogin/dashboard_page.png",
        fullPage: true,
        type: "png"
    });

    await expect(page.getByText("Мои курсы", { exact: true })).toBeVisible();
    await expect(
        page.getByText("Здравствуйте, Дмитрий", { exact: true }).toBeVisible()
    );
});

test("Invalid login without userData", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.click(".styles_otherWays__ruSCf");
    await page.getByText("Войти по почте").click();
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_invalidLogin_withoutUserData/login_page.png",
        type: "png"
    });
    await page.getByTestId("login-submit-btn").click();
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_invalidLogin_withoutUserData/error_page.png",
        type: "png"
    });

    await expect(
        page.locator("span").filter({ hasText: "Обязательное поле" }).first()
    ).toBeVisible();
});

test("Invalid login with invalid userData", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.click(".styles_otherWays__ruSCf");
    await page.getByText("Войти по почте").click();
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/login_page.png",
        type: "png"
    });
    await page.click("[placeholder='Email']");
    await page.getByRole("textbox", { name: "Email" }).fill("test" + userLogin);
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/inputInvalidEmail.png",
        type: "png"
    });

    await page.click("[placeholder='Пароль']");
    await page
        .getByRole("textbox", { name: "Пароль" })
        .fill("1234" + userPassword);
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/inputInvalidPassword.png",
        type: "png"
    });
    await page.getByTestId("login-submit-btn").click();
    await page.locator(".modal_content__DUfb6").screenshot({
        path: "test-results/screenshots/test_invalidLogin_invalidUserData/error_page.png",
        type: "png"
    });

    await expect(page.getByTestId("login-error-hint")).toBeVisible();
    await expect(page.getByTestId("login-error-hint")).toContainText(
        "Вы ввели неправильно логин или пароль."
    );
});
