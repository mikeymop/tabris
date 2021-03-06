var tabris = require('tabris')

var page = new tabris.Page({
  topLevel: true,
  title: "myapp"
});

var pain = 0;
var landingPage = new tabris.Page();

var grumpy = new tabris.TextView({
	layoutData: {centerX:0, centerY: 0},
	text: "Hey!",
}).appendTo(page);

new tabris.Button({
	id: 'magicButton',
	text: "Press Me!",
	centerX:0,
	top: [grumpy, 20], 
}).on('select', function() {
	this.set("text", "Ouch!!");
	++pain;
	if (pain > 12){
		landingPage.open();
	} else if (pain > 10){	//yell at me
		grumpy.set({text: "DUDE ENOUGH!",
				textColor: "red"
			});
		grumpy.animate({ transform:{scaleX: 4, scaleY: 4}}, {duration: 500}); 
	} else if (pain > 5) {	//raise voice
		grumpy.set({text: "Seriously, quit it!",
				textColor: "maroon"
			});
	//	grumpy.set({"textColor=maroon"});
		grumpy.animate({ transform:{scaleX:2.0, scaleY:2.0}}, {duration: 500});
	} else if (pain > 2) {  //cut it
		grumpy.set({text: "Can you stop?"});	
	}
}).appendTo(page);

grumpy.appendTo(page);

page.open();
