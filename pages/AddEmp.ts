import { expect, Locator, Page } from "@playwright/test";

export class AddEmp{
    readonly page:Page
    readonly clickPim:Locator
    readonly clickAdd:Locator
    readonly firstName:Locator
    readonly Middlename:Locator
    readonly Lastname:Locator
    readonly employeeId:Locator
    readonly clickSave:Locator
    readonly displayPersonalId:Locator
    constructor(page:Page)
    {
        this.page=page
        this.clickPim=page.getByRole('link', { name: 'PIM' })
        this.clickAdd=page.getByRole('button', { name: 'Add' })
        this.firstName=page.locator('input#firstName')
        this.Middlename=page.locator('input#middleName')
        this.Lastname=page.locator('input#lastName')
        this.employeeId=page.locator('input#employeeId')
        this.clickSave=page.getByRole('button', { name: 'Save' })  
        this.displayPersonalId=page.locator('input#personal_txtEmployeeId')
    }
    //method for add emp
    async Add_Emp(fname:string,mName:string,lname:string)
    {
        this.clickPim.click()
        await this.page.waitForTimeout(2000)
        this.clickAdd.click()
        await this.firstName.waitFor({state:'visible'});
        await this.firstName.fill(String(fname||""));
        await this.Middlename.waitFor({state:'visible'});
        await this.Middlename.fill(String(mName||""));
        await this.Lastname.waitFor({state:'visible'});
        await this.Lastname.fill(String(lname||""));
        //capture Employee id
        const Expectedid=await this.employeeId.inputValue()
        await this.clickSave.click()
        await this.page.waitForTimeout(2000)
        const Actualid=await this.displayPersonalId.inputValue()
        expect(Actualid).toBe(Expectedid);
        console.log(Expectedid+"  "+Actualid)
        return Actualid;
    }
}