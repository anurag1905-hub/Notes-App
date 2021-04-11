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
}