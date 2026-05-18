function addItem(){
	var text= prompt("Add To Do list");
	if(text.length>0){
		var list = new Date();
		setCookie('obj'+list.getTime(),encodeURIComponent(text));
		addListItem('obj'+list.getTime(),text);
	}
}

function setCookie(sName, sValue){
	document.cookie = sName + '=' + sValue;
	var date = new Date();
	date.setMonth(date.getYear()+1);
	document.cookie += ('; expires=' + date.toUTCString()); 
}

function unsetCookie(sName){
	document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}
function addListItem(id,text){
	var list = document.getElementById('ft_list');
	list.innerHTML+='<div id='+id+'>'+text+' <button onclick="deleteItem(\''+id+'\')">X</button></div>';
}

function deleteItem(id){
if (confirm("Delete item?"))
{
  document.getElementById(id).style.display='none';
	  unsetCookie(id);
}}