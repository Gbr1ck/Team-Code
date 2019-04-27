window.onLoad = function(){
	document.getElementByID("title").innerHTML = localStorage.getItem("currentLocTitle");
	document.getElementByID("content").innerHTML = localStorage.getItem("currentLocContent");
	document.getElementByID("picture").innerHTML = localStorage.getItem("currentLocPicture");
}
