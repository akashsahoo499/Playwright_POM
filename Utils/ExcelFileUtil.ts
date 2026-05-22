import xlsx from 'xlsx'
export class ExcelFileUtil{
    static  getExcelData(filepath:string,sheetName:string)
    {
        try{
            const workbook=xlsx.readFile(filepath)
            const sheet=workbook.Sheets[sheetName]
            const jsonData=xlsx.utils.sheet_to_json(sheet)
            return jsonData
        }catch(error){
            console.log(error)
        }
        
        
    }
}