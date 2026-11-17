let form=document.getElementById("myform");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let username=document.getElementById("username").value;

    if(username.trim()==="")
    {
        document.getElementById("usernameError").textContent="username is required";
    }
    else{
         document.getElementById("usernameError").textContent="";
         
    }
});