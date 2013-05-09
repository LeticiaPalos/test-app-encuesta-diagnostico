function enable_another(id, id2){
   if(document.getElementById(id2).checked){
      document.getElementById(id).disabled = false;
      document.getElementById(id).style.display='';      
   }
   else{
      document.getElementById(id).disabled = true;
      document.getElementById(id).style.display='none';
   }
}

function show(id){
  document.getElementById(id).style.display='';
}

function hide(id){
	document.getElementById(id).style.display='none';
}
