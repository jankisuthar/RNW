const fs=require("fs/promises")

async function getAllEmp(){
    const data=await fs.readFile("emp.json",{
        encoding:'utf-8'
    })
    return JSON.parse(data)
}

async function updateAllEmp(data){
    const employee=JSON.stringify(data)

   await fs.writeFile("./emp.json",employee,{
       encoding:'utf-8'
    })
 
    
}

async function addEmp(data){
    let employees=await getAllEmp()
    let  maxid=-1;
    for(employee of employees)
    {
        if(employee.id>maxid)
        {
            maxid=employee.id
        }
    }
    const newEmp={
         ...data,
         id:maxid+1
    }
    employees.push(newEmp)
    await updateAllEmp(employees)
    return employee
}


module.exports={
    getAllEmp,
    addEmp
}