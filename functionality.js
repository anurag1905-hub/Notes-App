window.onload=function(){
    document.getElementById("menulink").onclick=function(){
        var menu=document.getElementById('menu');
        if(menu.className!='showmenu'){
            menu.className='showmenu';
        }
        else{
            menu.className='hiddenmenu';
        }
    }
    document.getElementById('about').onclick=function(){
    document.getElementById('container').innerHTML="";
    document.getElementById('controls').innerHTML="";
    document.getElementById('menu').className='hiddenmenu';
    var container=document.getElementById('container');
    var p=document.createElement('p');
    p.id='aboutus';
    container.appendChild(p);
    var text=document.createTextNode("This project is intended to use local storage feature of HTML5");
    p.appendChild(text);
    }

    var home=document.getElementById('container').innerHTML;
    var controls=document.getElementById('controls').innerHTML;
    display_saved_note();
    document.getElementById('home').onclick=function(){
      document.getElementById('container').innerHTML=home;
      document.getElementById('controls').innerHTML=controls;
      document.getElementById('menu').className='hiddenmenu';
      display_saved_note();
    }
}

/*Function to check availability of web storage */
function check_web_storage_support(){
    if(typeof(storage)!==undefined){
        return (true);
    }
    else{
        alert("Web storage not supported");
        return (false);
    }
}

/*Function to retrieve saved notes */
function display_saved_note(){
    if(check_web_storage_support()==true){
        result=localStorage.getItem('note');
    }
    if(result===null){
        result="No note saved!";
    }
    document.getElementById('area').value=result;
}

/*Functionality for save button */
function save(){
    if(check_web_storage_support()==true){
        var area=document.getElementById("area");
        if(area.value!=''){
            localStorage.setItem("note",area.value);
        }
        else{
            alert("Nothing to save");
        }
    }
}

/*Functionality for clear button */
function clear(){
    document.getElementById('area').value="";
}


