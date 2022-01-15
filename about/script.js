const enableExpandOnClick = function() {
	var classCodes = document.getElementsByClassName('expand-on-jump');
	for(var i = 0; i < classCodes.length; i++) {
		var classCode = classCodes[i];
		classCode.onclick = function() {
			document.getElementById(this.getAttribute("href").substring(1)).checked = true;
		}
	}
}
