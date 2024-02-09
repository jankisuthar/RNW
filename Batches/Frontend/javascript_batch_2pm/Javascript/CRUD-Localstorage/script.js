let SubmitData = document.getElementById('submitdata')

function setLocalStorage()
{
    if(localStorage.getItem('userData'))
    {
            let ShowDiv = document.querySelector('#show')
            ShowDiv.innerHTML = "";

            let arr = JSON.parse(localStorage.getItem('userData'))
            arr.forEach((user,id) => {
                // console.log(user.name);
                let newDiv = document.createElement('table');
                let HtmlData=`
                    <tr >
                        <td width="100">${id}</td>
                        <td width="100">${user.name}</td>
                        <td width="100">${user.password}</td>
                        <td width="200"><button class="btn btn-danger" onClick="DeleteData(${id})">Delete</button>
                        <button class="btn btn-warning" onClick=" onEdit(${id})" id="btnEdit">Update</button></td>
                    </tr>
                `
                // document.getElementById('showData').innerHTML = HtmlData;
                newDiv.insertAdjacentHTML('afterbegin',HtmlData);
                ShowDiv.insertAdjacentElement('afterbegin',newDiv);
        });
         
    }
    else{
        let arr = [];
        let  ArrData= {
            name:"",
            password:"",
        }
        arr.push(ArrData);
        localStorage.setItem("userData",JSON.stringify(arr));
       
    }
}


//submit data
SubmitData.addEventListener('click',function(e){
e.preventDefault()

let arr  =   JSON.parse(localStorage.getItem('userData'))
    console.log("btn clicked");
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    // let arr =  []

    let  ArrData= {
        name:name,
        password:password
    }
    arr.push(ArrData);
    localStorage.setItem("userData",JSON.stringify(arr));
    alert("Data added Successfully");
    setLocalStorage()
   
    
   
})


//delete data
function DeleteData(id)
{
    let arr = JSON.parse(localStorage.getItem('userData'))
    let deleteArr=[...arr]
    deleteArr.splice(id,1)
    arr=[...deleteArr]
    alert("data deleted Successfully!");
    localStorage.setItem("userData",JSON.stringify(arr));
    setLocalStorage()
}

//edit/update data
function onEdit(id)
{
    console.log(id);
    let arr = JSON.parse(localStorage.getItem('userData'))

    let name = document.querySelector('#name').value=arr[id].name;
    let password = document.querySelector('#password').value=arr[id].password;

   
    console.log(name," ",password);
    SubmitData.setAttribute('disabled',true)
    
    let editBtn = document.createElement('button');
    let form = document.querySelector('#form');
    let btnEdit = document.querySelectorAll('#btnEdit');
    editBtn.innerHTML = "Upadte Task";

    btnEdit.forEach((ele)=>{ele.setAttribute('disabled',true)})

    form.insertAdjacentElement('beforeend',editBtn)


    editBtn.addEventListener('click',(e)=>{
        e.preventDefault()

        let newname = document.querySelector('#name');
        let newpassword = document.querySelector('#password');

        arr.splice(id,1,{name:newname.value,password:newpassword.value})

        localStorage.setItem('userData',JSON.stringify(arr)); 

        setLocalStorage();
        newname.value=""
        newpassword.value=""
        form.removeChild(form.lastElementChild)
        SubmitData.removeAttribute('disabled')
    })
}

