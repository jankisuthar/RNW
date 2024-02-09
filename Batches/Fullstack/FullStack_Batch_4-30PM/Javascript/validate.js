function checkdata(e,spnid)
{
    if(e.value =="")
    {      
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML="Please Enter Data!"   
    }
}

function NameCheck(e,spnid)
{
    var name = /^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML="please enter only characters!"
    }
}
function EmailCheck(e,spnid)
{

    var email = /^([a-z0-9.-_])+@([a-z0-9.-_])+\.([a-z]{2,3})$/
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML="please enter valid email!"
    }
}
function PwdCheck(e,spnid)
{

    var pwd = /^([A-Za-z0-9._-]{3,5})$/
    if(pwd.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML="please enter min 3 & max 5 characters!"
    }
}
function MobileCheck(e,spnid)
{

    var mobile = /^([0-9]{6,10})$/ 
    if(mobile.test(e.value))
    {
        document.getElementById(spnid).innerHTML=""
    }
    else{
        document.getElementById(spnid).style.color="red"
        document.getElementById(spnid).innerHTML="please enter valid Mobile number!"
    }
}