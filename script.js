const loadTheme = function() {
	if (localStorage.getItem('theme') == 'light') {
		document.documentElement.setAttribute('data-theme', 'light');
		$('#toggle-lights').toggleClass('fa-toggle-off fa-toggle-on');
		$('#onoff').text('off');
	}
}
