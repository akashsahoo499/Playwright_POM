import{test} from '@playwright/test'
import { AdminLogin } from '../pages/AdminLogin'
import { AddEmp } from '../pages/AddEmp'
import * as dotenv from 'dotenv'
import employeedata from '../TestData/employee.json'
dotenv.config()
test.describe('Multiple Data Using json File',()=>{
    let login:AdminLogin
    let emp:AddEmp
    test.beforeEach(async({page})=>{
        login=new AdminLogin(page)
        emp=new AddEmp(page)
        await login.LaunchUrl(process.env.Base_Url!)
        await login.HRMLogin(process.env.Base_User!,process.env.Base_Pass!)
    })
    for(const data of employeedata)
    {
        test(`Add Employee ${data.firstName} ${data.middleName}`,async({page})=>{
            //call all emp method
            await emp.Add_Emp(data.firstName,data.middleName,data.lastName)
        })
    }
})