function valid_data(e,spnid)
{
  if(e.value == "")
  {
    document.getElementById(spnid).style.color = "red"
    document.getElementById(spnid).innerHTML = "Please Enter Data!"
  }      
}

function Name_valid(e,spnid)
{
    let name = /^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color = "red"
        document.getElementById(spnid).innerHTML="Please Enter only Characters!"
    }
}
function Email_valid(e,spnid)
{
    let email = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,3}$/
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color = "red"
        document.getElementById(spnid).innerHTML="Please Enter valid Email!"
    }
}
function Pwd_valid(e,spnid)
{
    let pwd = /^[a-zA-Z0-9]{3,5}$/
    if(pwd.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color = "red"
        document.getElementById(spnid).innerHTML="Please Enter min 3 and max 5 values!"
    }
}
function Mobile_valid(e,spnid)
{
    let mobile = /^[0-9]{9}$/
    if(mobile.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color = "red"
        document.getElementById(spnid).innerHTML="Please Enter valid mobile number!"
    }
}