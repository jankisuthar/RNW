function valid(e,spnid){
        if(e.value=="")
        {
            document.getElementById(spnid).style.color="red"
            document.getElementById(spnid).innerHTML = "Please Enter data";
           
        }
        else{
            document.getElementById(spnid).innerHTML=""
        }
}

function NameValid(e,spnid)
{
    let name = /^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML = "Please Enter only Characters!";
    }
}
function EmailValid(e,spnid)
{
    let email = /^[a-z0-9.-_]+@([a-z0-9.-_])+\.([a-z]{2,3})$/
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML = "Please Enter valid email!";
    }
}
function pwdValid(e,spnid)
{
    let pwd = /^[a-z0-9]{3,5}$/
    if(pwd.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML = "Please Enter min 3 & max 5 value!";
    }
}
function mobileValid(e,spnid)
{
    let mobile = /^[0-9]{10}$/
    if(mobile.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML = "Please Enter valid Mobile!";
    }
}