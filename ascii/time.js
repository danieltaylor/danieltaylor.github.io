//CHARACTERS
	var space = "  ";
	var chars = [];
	var empty = [];
	for (var i=0; i<10; i++) {
	    empty[i]=null;
	}
	for (var i=0; i<127; i++) {
		chars[i]=empty;
	}

		chars[' '.charCodeAt()] =  ["       ",		//32
									"       ",
									"       ",
									"       ",
									"       ",
									"       ",
									"       ",
									"       ",
									"       ",
									"       "];
		
		chars['0'.charCodeAt()] =  [" ____________  ",		//48
									"|\\           \\ ",
									"| \\___________\\",
									"| |           |",
									"| |    ___    |",
									"| |   | | |   |",
									"| |   |_| |   |",
									"| |   |__\\|   |",
									"| |           |",
									" \\|___________|"];

		chars['1'.charCodeAt()] =  ["   ____  ",			//49
									"  /\\____\\",
									"|\\ /    |",
									" \\|_    |",
									"  | |   |",
									"  | |   |",
									"  | |   |",
									"  | |   |",
									"  | |   |",
									"   \\|___|"];

		chars['2'.charCodeAt()] =  ["  ___________  ",		//50
									" |\\          \\ ",
									" | \\__________\\",
									" | |          |",
									" _\\|______    |",
									"|\\________|   |",
									"||    ________|",
									"||   |_______\\ ",
									"||            |",
									"\\|____________|"];

		chars['3'.charCodeAt()] =  [" ___________   ",		//51
									"|\\          \\  ",
									"| \\__________\\ ",
									"| |           \\",
									" \\|________   |",
									" ____|\\__\\|   |",
									"|\\   \\|___   < ",
									"| \\_______|   |",
									"| |           |",
									" \\|__________/ "];

		chars['4'.charCodeAt()] =  [" ___   ____    ",		//52
									"|\\  \\ |\\   \\   ",
									"| \\__\\| \\___\\  ",
									"| |  || |   |  ",
									"| |  || |   |_ ",
									"| |  |_\\|   |_\\",
									" \\|_____     _|",
									"      | |   |  ",
									"      | |   |  ",
									"       \\|___|  "];

		chars['5'.charCodeAt()] =  [" ____________  ",		//53
									"|\\           \\ ",
									"| \\___________\\",
									"| |           |",
									"| |    _______|",
									"| |   |______\\ ",
									" \\|_______    \\",
									"|\\ _______|   |",
									"| |           |",
									" \\|__________/ "];

		chars['6'.charCodeAt()] =  ["  ___________  ",		//54
									" /\\          \\ ",
									"|\\ \\__________\\",
									"| \\/          |",
									"| |    _______|",
									"| |   |______\\ ",
									"| |    ___    \\",
									"| |   |___|   |",
									"| |           |",
									" \\\\__________/ "];

		chars['7'.charCodeAt()] =  [" ____________  ",		//55
									"|\\           \\ ",
									"| \\___________\\",
									" \\|_______    /",
									"       / /   / ",
									"      / /   /  ",
									"     / /   /   ",
									"    / /   /    ",
									"   / /   /     ",
									"   \\/___/      "];

		chars['8'.charCodeAt()] =  [" ___________   ",		//56
									"|\\          \\  ",
									"| \\__________\\ ",
									"| |    ___    |",
									"| |   |_| |   |",
									"| |   |__\\|   |",
									" > >   ___   < ",
									"| |   |_| |   |",
									"| |   |__\\|   |",
									" \\|___________|"];

		chars['9'.charCodeAt()] =  ["  __________   ",		//57
									" /\\         \\  ",
									"|\\ \\_________\\ ",
									"| \\/          \\",
									"| |    ____   |",
									" \\|   |___|   |",
									"  \\_______    |",
									"        | |   |",
									"        | |   |",
									"         \\|___|"];

		chars[':'.charCodeAt()] =  ["       ",				//58
									" ____  ",
									"|\\ ___\\",
									"| |   |",
									" \\|___|",
									" ____  ",
									"|\\ ___\\",
									"| |   |",
									" \\|___|",
									"       "];

		chars['A'.charCodeAt()] =  [" ____________   ",		//65
									"|\\           \\  ",
									"| \\___________\\ ",
									"| |    ___     |",
									"| |   |_| |    |",
									"| |   |__\\|    |",
									"| |            |",
									"| |    ___     |",
									"| |   | | |    |",
									" \\|___|  \\|____|"];
		
		chars['M'.charCodeAt()] =  [" ____     ____  ",		//77
									"|\\   \\   /\\   \\ ",
									"| \\___\\_/  \\___\\",
									"| |    \\ \\ /   |",
									"| |     \\_/    |",
									"| |            |",
									"| |   |\\__/|   |",
									"| |   |  | |   |",
									"| |   |  | |   |",
									" \\|___|   \\|___|"];
		
		chars['P'.charCodeAt()] =  [" ____________   ",		//80
									"|\\           \\  ",
									"| \\___________\\ ",
									"| |    ___     |",
									"| |   |_| |    |",
									"| |   |__\\|    |",
									"| |            |",
									"| |    _______/ ",
									"| |   |         ",
									" \\|___|         "];

	var toString = function(text)
	{
		var returnText = "";
		var textChars = text.split('');
		for (var lineNo=0; lineNo<=9; lineNo++) {
			for (var ch=0; ch<textChars.length; ch++) {
				returnText += chars[textChars[ch].charCodeAt()][lineNo] + space;
			}
				returnText += "<br>";
		}
		return returnText;
	}

//GENERAL SETTINGS
	var twelveHour = true;
	var hideAMPM = false;
	var blink = true;

	$(document).ready(function() {
		$('#hideAMPM').click(function() {
			hideAMPM = !hideAMPM;
		});
		$('#twentyfourhour').click(function() {
			twelveHour = !twelveHour;
		});
		$('#nightmode').click(function() {
		    $('body').toggleClass('dark');
		});
		$('#blink').click(function() {
			blink = !blink;
		});
	});

	var d;
	var h;
	var m;
	var s;
	var col = ":";
	var ampm = "";

//CLOCK VALUES
	var refreshTime = function() {
		d = new Date();
		h = d.getHours();
		m = d.getMinutes();
		s = d.getSeconds();

		if (m<10) {
			m="0"+m;
		}

		if (s<10) {
			s="0"+s;
		}

		//Settings Based
		if (twelveHour) {
			if (h>12) {
				h-=12;
				ampm = " PM";
			}
			else {
				ampm = " AM"; 
			}
		}
		else {
			ampm = "";
		}

		if (hideAMPM) {
			ampm = "";
		}

		if (blink) {
			if (s%2===0) {
				col=":";
			}
			else {
				col=" ";
			}
		}
		else {
			col = ":";
		}

		document.getElementById("ascii").innerHTML=toString(h+col+m+ampm);
	}
	setInterval(refreshTime, 1000);