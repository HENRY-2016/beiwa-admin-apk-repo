


function LoadInterfacePage ()
{
    password = document.getElementById('password').value;

    if (!(password == "Maria91"))
        {document.getElementById('invalid-label').style.display='block';}
    else 
        {
            window.location="interface.html";
        }

}