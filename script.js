let selectField =  document.getElementById('select-field');
let list = document.getElementById('list');
let bttn =  document.getElementById('bttn');
selectField.onclick = function () {

    if (list.style.display == 'block')
        {
            list.style.display = 'none';
        }
  else 
  {
    list.style.display = 'block';

  }        
}


function GotoPage()
{
  window.location.href="homepage.html";
}

    
 

