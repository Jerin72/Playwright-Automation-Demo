//const Exceljs=require ('exceljs');
import Exceljs from "exceljs"
//import {test,expect} from '@playwright/test'

//custom function for excel to change the value
async function writeExcelTest(searchValue,replacedValue,change,filePath) {   //searchValue is the value to be changed,filepath-path of excel file
      const workbook=new Exceljs.Workbook();  //creating a new workbook i.e entire excel
      await workbook.xlsx.readFile(filePath)  //to read the excelfile. inbuilt file
      const worksheet=workbook.getWorksheet('Sheet1'); //to get the particular sheet from excel
      const output=await readExcel(worksheet,searchValue);// output value is having row and column //first runwithout await then put
      const cell=worksheet.getCell(output.row+change.rchange,output.column+change.cchange); //insted of hardcode we use the object variables ,use change as last
      //const cell=worksheet.getCell(output.row,output.column)
      cell.value=replacedValue 
      await workbook.xlsx.writeFile(filePath);//re-write the file and save it again
}

async  function readExcel(worksheet,searchValue) 
{
    
   let output={row:-1,column:-1} 

  
worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,colNumber)=>{
 
        if(cell.value===searchValue)
      
         {
            output.row=rowNumber; 
            output.column=colNumber; 
            console.log(cell.value)
            console.log(output.row); 
            console.log(output.column);
        
      }
    })

  })

  return output; 
}
await writeExcelTest('Kia','replaced pricess',{rchange:0,cchange:1},"C:/Users/Jerin Varghese/PlaywrightAutomation/Utils/Vehicle_Record.xlsx")