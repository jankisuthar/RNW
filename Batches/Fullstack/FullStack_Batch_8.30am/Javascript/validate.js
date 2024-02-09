function ValidData(){
    let name = document.getElementById('name').value;

    if(name=="")
    {
        alert("Please enter name!");
        document.getElementById('name').focus();
        return false;
    }
    let email = document.getElementById('email').value;
    if(email=="")
    {
        alert("Please enter Email!");
        document.getElementById('email').focus();
        return false;
    }
    let pwd = document.getElementById('pwd').value;
    if(pwd=="")
    {
        alert("Please enter Password!");
        document.getElementById('pwd').focus();
        return false;
    }
    let date = document.getElementById('date').value;
    if(date=="")
    {
        alert("Please select Date!");
        document.getElementById('date').focus();
        return false;
    }
   if((form.gender[0].checked==false) && (form.gender[1].checked==false))
   {
        alert("Please select gender!");
      
        return false;
   }
   if((form.hobby[0].checked==false) && (form.hobby[1].checked==false))
   {
        alert("Please select hobby!");
      
        return false;
   }
}