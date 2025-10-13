export class LoginPage {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('//img[@alt="hellobooks"]');
        this.emailBox = page.locator('//input[@id="input_your_working_email"]');
        this.passwordBox = page.locator('//input[@id="input_password"]');
        this.signinButton = page.locator('//div[@class="text-nowrap"]');
        this.image = page.locator('//div[@class="w-full"]//div[@class="absolute inset-0 "]');
        this.forgotPassword = page.locator("//span[@class='text-sm text-blue-600 hover:text-blue-900 cursor-pointer pr-2']");
        this.sendResetLink = page.locator('//button[@type="button"]');
        this.toastMsg = page.locator("//div[@class='flex items-center gap-1']");
        this.successToast = page.locator("//div[@class='flex items-center gap-1']");
        this.invalidToast = page.locator("//div[@class='flex items-center gap-1']");
        this.enterToast = page.locator("//div[@class='flex items-center gap-1']");
        this.passwordToast = page.locator("//div[@class='flex items-center gap-1']");
        this.enterEmail = page.locator('//input[@id="input_your_working_email"]');
        this.resend = page.locator('//div[@class="text-nowrap"]');
        

    } 

    async gotologin() {
        await this.page.goto('https://dev.hellobooks.ai/login');
    }

    async login(username, password) {
        await this.emailBox.fill(username);
        console.log("email entered success")
        await this.passwordBox.fill(password);
        console.log("password entered success")
        await this.signinButton.click();
       
    }
   
    async forgotPasswordFlow(email){
         await this.forgotPassword.click();
         await this.enterEmail.fill(email);
        await this.resend.click();
        

        
    }

}