import { expect, Locator, Page } from "@playwright/test";
//crate class for login and define locators and methods
export class AdminLogin{
    //declare variable for login
    readonly page:Page
    readonly userNameInput:Locator
    readonly passWordInput:Locator
    readonly loginButton:Locator
    readonly welcomeMenu:Locator
    readonly logout:Locator
    constructor(page:Page){
        this.page=page
        this.userNameInput=page.locator('#txtUsername')
        this.passWordInput=page.locator('#txtPassword')
        this.loginButton=page.getByRole('button', { name: 'LOGIN', exact: true })
        this.welcomeMenu=page.getByRole('link', { name: 'Welcome Suresh' })
        this.logout=page.getByRole('link', { name: 'Logout' })
    }
    //method for launch url
    async LaunchUrl(url:string)
    {
        this.page.goto(url)
    }
    //method for login
    async HRMLogin(user:string,pass:string)
    {
        await this.userNameInput.clear()
        await this.userNameInput.fill(user)
        await this.passWordInput.clear()
        await this.passWordInput.fill(pass)
        await this.loginButton.click()
        await this.page.waitForTimeout(3000)
        await expect(this.page).toHaveURL(/dashboard/)
    }
    //method for logout
    async HrMLLogout()
    {
        await this.welcomeMenu.click()
        await this.logout.click()
    }
}