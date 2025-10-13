export class SignupPage {
    constructor(page) {
        this.page = page;
         this.signup = page.locator("//button[normalize-space()='Sign up']")
        this.logo = page.locator('//img[@alt="hellobooks"]');
        this.firstName = page.locator('//input[@id="input_first_name"]');
        this.lastName = page.locator('//input[@id="input_last_name"]');
        this.enterEmail = page.locator('//input[@id="input_your_working_email"]');
        this.enterPassword = page.locator('//input[@id="input_password"]');
        this.confirmPassword = page.locator('//input[@id="input_confirm_password"]');
        this.signupButton = page.locator('//div[@class="text-nowrap"]');
    
    }
    //    async gotosignup() {
    //     await this.page.goto('https://dev.hellobooks.ai/register');

    // }
    
     async siginupFunction(firstName, lastName , email,password,confirmpassword) {
        await this.firstName.fill(firstName);
        console.log("firstName entered success")
        await this.lastName.fill(lastName);
        console.log("lastName entered success")
        await this.enterEmail.fill(email)
        console.log("email entered success")
        await this.enterPassword.fill(password);
        console.log("password entered success")
        await this.confirmPassword.fill(confirmpassword);
        console.log("confirmpassword entered success")
        await this.signupButton.click();



     }


}