import {test} from'@playwright/test'
import { AdminLogin } from '../pages/AdminLogin'
import { AddEmp } from '../pages/AddEmp'
import * as dotenv  from 'dotenv'
import { ExcelFileUtil } from '../Utils/ExcelFileUtil'
import path from 'node:path'


dotenv.config();
const filepath=path.join(__dirname,"../TestData/HRMData.xlsx")
const sheetName="Employee"
let employeeData:any
try{
    employeeData=ExcelFileUtil.getExcelData(filepath,sheetName)
}
catch(message){
    console.log(message)
}
test.describe('Multiple Data Using Excel File',()=>{
    let login :AdminLogin
    let emp:AddEmp
    test.beforeEach(async({page})=>{
        login=new AdminLogin(page)
        emp=new AddEmp(page)
        //call url method
        await login.LaunchUrl(process.env.Base_Url!)
        await login.HRMLogin(process.env.Base_User!,process.env.Base_Pass!)
    })
    for(const data of employeeData)
    {
        test(`Add Employee using Excel ${data.firstName}`,async()=>{
            //call add emp method 
            console.log(data.firstName,data.middleName,data.lastName)
            await emp.Add_Emp(data.firstName,data.middleName,data.lastName);
        })
    }
})