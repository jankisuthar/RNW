function Valid(e,spnid)
{
    console.log(e);
    if(e.value == "")
    {
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML = "This field is Required!";
    }
}

//with regEXP
function ChckData(e,spnid)
{
    let name = /^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML = ""
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML = "please enter only Characters!"
    }
}
function EmailChck(e,spnid)
{
  
    let email = /^([a-z0-9._-])+@([a-z0-9-._])+\.([a-z]{2,3})$/
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerHTML = ""
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML = "please enter valid Email!"
    }
}
function PwdChck(e,spnid)
{
    let pwd = /^[a-zA-Z0-9]{3,5}$/
    if(pwd.test(e.value))
    {
        document.getElementById(spnid).innerHTML = ""
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML = "please enter min 3 & max 5 value!"
    }
}
