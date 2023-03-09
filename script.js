
const search = () =>{
    let input = document.getElementById('s').value.toUpperCase();

    let mytable =  document.getElementById('mytable');

    let name = document.getElementsByClassName('cartoons');

    let content = mytable.getElementsByClassName('box');

    for(var i=0; i<name.length;i++)
    {
        if(name)
        {
            let textvalue = name[i].textContent || name[i].innerHTML;

            if(textvalue.toUpperCase().indexOf(input) > -1)
            {
                content[i].style.display="";
            }
            else{
                content[i].style.display="none";
            }
        }
    }

    let notFound = true;
    for (let i = 0; i < name.length; i++) {
      if (content[i].style.display != "none") {
        notFound = false;
        break;
      }
    }
  
    let message = document.getElementById('message');
    if (notFound) {
      message.innerHTML = "RESULTS NOT FOUND";
      message.style.display = "";
    } else {
      message.style.display = "none";
    }
}