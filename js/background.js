/*document.addEventListener('DOMContentLoaded', function(){
		chrome.tabs.executeScript(null, {"code":"window.getSelection().toString()"}, function(selection){
			let text = selection[0];
			document.querySelector(".message").innerText = selection[0];
		});
});*/

/*document.addEventListener('DOMContentLoaded', function(){
		chrome.tabs.executeScript(null, {"code":"console.log('jkjkj')"}, function(selection){
			let text = selection;
			document.querySelector(".message").innerText = text;
		});
});*/
document.addEventListener('DOMContentLoaded', function(){
chrome.tabs.executeScript(null, {"code":"document.getElementsByClassName('cl-left red').item(0).innerHTML"}, function(selection){
	document.querySelector(".message").innerHTML = selection[0];
		/*sessionStorage.setItem('key', 'Nick');
		let data = sessionStorage.getItem('key');
		alert(data);*/
	});
//
	
});



