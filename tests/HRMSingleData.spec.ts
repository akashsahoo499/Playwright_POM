import{test} from "@playwright/test";
import { AdminLogin } from "../pages/AdminLogin";
import { AddEmp } from "../pages/AddEmp";
import * as dotenv from 'dotenv'
dotenv.config()
test.describe('HRM Employee Management',()=>{
    let login:AdminLogin
    let emp:AddEmp
    test.beforeEach(async({page})=>{
        login=new AdminLogin(page)
        emp=new AddEmp(page)
        await login.LaunchUrl(process.env.Base_Url!)
        await login.HRMLogin(process.env.Base_User!,process.env.Base_Pass!)
    });
    test('Should add a new employee successfully',async({page})=>{
        await emp.Add_Emp('Akhilesh','Queen','King12')
    })
    test.afterEach(async()=>{
        await login.HrMLLogout()
    })
}) 