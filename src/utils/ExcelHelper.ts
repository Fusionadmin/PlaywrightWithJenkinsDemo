//Import xlsx plugin to read EXCEL files
import * as EXCEL from 'xlsx';
//import path from 'path';
import fs from 'fs';

//Define test date structure
interface TestRecords {
    Skill1: string;
    Skill2: string;
    Skill3: string;
}
// //Create utility function to read EXCEL file and return data in array of objects format  - AI generated code - not used in the test file
// export function readExcelFile(filePath: string): TestRecords[] {
//     //Read the EXCEL file as binary string
//     const workbook = XLSX.readFile(filePath);
//     //Parse the first sheet of the workbook 
//     const sheetName = workbook.SheetNames[0];
//     //Get 1st sheet
//     const worksheet = workbook.Sheets[sheetName];
//     //Convert the sheet data to JSON format
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
//     const headers = jsonData[0];
//     //Convert the JSON data to array of objects format
//     const records: TestRecords[] = [];

//     for (let i = 1; i < jsonData.length; i++) {
//         const record: any = {};
//         for (let j = 0; j < headers.length; j++) {
//             record[headers[j] as keyof TestRecords] = jsonData[i][j];
//         }
//         records.push(record as TestRecords);
//     }

//     return records;
// }

//Create utility function to read EXCEL file and return data in array of objects format
export function readExcelFile(filePath: string) {
    //Read the EXCEL file as binary string
    const file = fs.readFileSync(filePath);

    //Parse the first sheet of the workbook 
    const workbook = EXCEL.read(file);
    
    //Get 1st sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    //Convert the sheet data to JSON format
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, {header: 1});

    //Convert the raw JSON data to array of objects format
    const records: TestRecords[] = rawData.slice(1).map((column: any)=>({
        Skill1: column[0],
        Skill2: column[1],
        Skill3: column[2]
    })) 
    return records;
}