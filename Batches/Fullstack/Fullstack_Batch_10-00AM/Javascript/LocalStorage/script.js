let submitdata = document.getElementById('submitdata')


//read data
function Setlocalstotage(){
    if(localStorage.getItem("UserData"))
    {
        let showdiv=document.querySelector('#show')
        showdiv.innerHTML=""

        let arr = JSON.parse(localStorage.getItem('UserData'))
        arr.forEach((user,id) => {
            console.log(user.name);
            let newdiv = document.createElement('table')
            let HTMLDATA=`
                <tr>
                    <td width="100">${id}</td>
                    <td width="100">${user.name}</td>
                    <td width="100">${user.pwd}</td>
                    <td width="100"><button class="btn btn-success" onclick="DeleteData(${id})">Delete</button>/
                    <button class="btn btn-warning" onclick="UpdateData(${id})">Update</button>
                    </td>
                </tr>
            `
            newdiv.insertAdjacentHTML('afterbegin',HTMLDATA)
            showdiv.insertAdjacentElement('afterbegin',newdiv)
        });
    }
    else{
        let arr=[]
        let ArrData={name:"",pwd:""}
        arr.push(ArrData)
        localStorage.setItem("UserData",json.stringify(arr))
    }
}


//create data
submitdata.addEventListener('click',function(e){
    e.preventDefault()
    console.log("clicked");
    let arr = JSON.parse(localStorage.getItem("UserData"))
    let name = document.getElementById('name').value;
    let pwd = document.getElementById('pwd').value;

    let ArrData ={
                name:name,
                pwd:pwd
    } 
    console.log(ArrData);

    // let arr=[]
    arr.push(ArrData)
    console.log(localStorage.setItem("UserData",JSON.stringify(arr)))
    Setlocalstotage();
})

//delete data
function DeleteData(id)
{
    let arr = JSON.parse(localStorage.getItem('UserData'))
    let deleteArr = [...arr]
    deleteArr.splice(id,1)
    arr =[...deleteArr]
    alert("Data Deleted")
    localStorage.setItem("UserData",JSON.stringify(arr));
    Setlocalstotage();
}

//update data
function UpdateData(id){
    let arr = JSON.parse(localStorage.getItem('UserData'))
    let name = document.querySelector('#name').value = arr[id].name
    let pwd = document.querySelector('#pwd').value = arr[id].pwd

    submitdata.setAttribute('disabled',true)

    let editbtn = document.createElement('button')
    let form = document.querySelector('#form')
    let btnedit = document.querySelectorAll('#btnedit')

    editbtn.innerHTML = "Update-Edit"

    btnedit.forEach((ele)=>{ele.setAttribute('disabled',true)})
    form.insertAdjacentElement('beforeend',editbtn)
    editbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let newname = document.querySelector('#name')
        let newpwd = document.querySelector('#pwd')

        arr.splice(id,1,{name:newname.value,pwd:newpwd.value})

        localStorage.setItem("UserData",JSON.stringify(arr))
        Setlocalstotage();
        newname.value=""
        newpwd.value=""
        form.removeChild(form.lastElementChild);
        submitdata.removeAttribute('disabled')
    })
}