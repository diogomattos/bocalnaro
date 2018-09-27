var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
						
			var r = Math.floor(Math.random() * 11);
			
			var quote = new Array(11);

			quote[0] = "Boçalnaro \u{1F4A9}";
			quote[1] = "Bostonaro \u{1F4A9}";
			quote[2] = "Salnorabo \u{1F4A9}";
			quote[3] = "Bozonaro \u{1F4A9}";
			quote[4] = "Bolsonazi \u{1F4A9}";
			quote[5] = "Bonoro \u{1F4A9}";
			quote[6] = "Bonobo \u{1F4A9}";
			quote[7] = "Bonaldo \u{1F4A9}";
			quote[8] = "Coiso \u{1F4A9}";
			quote[9] = "Boçanaro \u{1F4A9}";
			quote[10] = "Bolnossauro \u{1F4A9}";
			quote[11] = "Bolsomario \u{1F4A9}";

			var n = quote[r];
            var replacedText = text.replace(/Bolsonaro/gi, n);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}


