import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page.js';
import { SignupPage } from '../pages/signup-page.js';
import { faker } from '@faker-js/faker';

test('login page elements checks', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await expect(loginPage.logo).toBeVisible();
});

test('login with valid', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login("rs.dk.00001@gmail.com", "Dummy@123");
    await page.waitForTimeout(4000);
    await expect(loginPage.successToast).toBeVisible();
});
test('login with invalid', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login("hd*jj@gmail.com", "hEy1@");
    await expect(loginPage.invalidToast).toBeVisible();
});


test('login with empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login(" ", " ");
    await expect(loginPage.enterToast).toBeVisible();

});

test('login with invalidPassword', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login("rs.dk.00001@gmail.com", "d6W_1");
    await expect(loginPage.passwordToast).toBeVisible();

});

test('login with emptyPassword', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login("rs.dk.00001@gmail.com", " ");

});

test('forgotPassword', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.forgotPasswordFlow("rs.dk.00001@gmail.com");
    await expect(page).toHaveURL("https://dev.hellobooks.ai/forgot-password");
    await expect(loginPage.toastMsg).toBeVisible();

});

test('signup page elementChecks', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    
    await loginPage.gotologin();
    await signupPage.signup.click();

    await signupPage.siginupFunction();
    await expect(signupPage.logo).toBeVisible();
});

   test('TC010 - invalid firstName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("Dummy","tester","dummy123@gmail.com","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC011 - invalid firstName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("#####","tester","dummydumm123@gmail.com","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC012 - invalid firstName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("  ","tester","dongle123@gmail.com","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC013 - invalid lastName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("software","#####","dummydumm123@gmail.com","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC014 - invalid lasttName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("software","  ","dummydumm123@gmail.com","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC015 - invalid email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("dummy","tester","#####","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC016 - invalid email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("software","tester","  ","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC017 - already usedEmail', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("dumm","tester","rs.dk.00001@gmail.com","gtyhY0$h","gtyhY0$h");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC018 - invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("dummy","tester","dummydumm123@gmail.com","abc","abc");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});
  
test('TC019 - invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("dumm","tester","dummydumm123@gmail.com"," "," ");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC020 - invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("dummy","tester","dummydumm123@gmail.com","Dummy@123","abc");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC021 - invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("dumm","tester","dummydumm123@gmail.com","Dummy@123"," ");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC022 - invalid firstName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    await signupPage.siginupFunction("Dummy","tester","rs.dk.00001@gmail.com","Dummy@123","Dummy@123");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});

test('TC023 - invalid firstName', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await loginPage.gotologin();
    //await signupPage.gotosignup();
    await signupPage.signup.click();
    var dummyEmail = faker.internet.email();
    await signupPage.siginupFunction("barat", "sunder", dummyEmail, "Dummy@123", "Dummy@123");
    await page.waitForTimeout(3000);
    await signupPage.signupButton.click();
    await page.waitForTimeout(3000);
});




