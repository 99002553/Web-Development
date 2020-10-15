function $(id)
{
    return document.getElementById(id)
}
//modify the style of display to none, making it invisible
function $hide(id)
{
    $(id).style.display="none"
}
//bring the visibility back....
function $show(id)
{
    $(id).style.display="inline-block"
}
//the classname to which 
function $mapEvent(classname, callbackFn){
	let allElements = document.getElementsByClassName(classname);
	for(let i = 0; i < allElements.length; i++){
		allElements[i].onclick = callbackFn;
	}
}