var landing = require("./myapp.js");

landingPage.exports.create = function() {
	return this.Page("Page", {
		title: "I told you!",
		topLevel: true,
	})
};

new tabris.ImageView({
	layoutData: {left: 10, top: 10, width: 400, height: 400},
	image: {src: "./images/anger.jpg"},
	background: "#fff",
	id: 'madman',
}).appendTo(landingPage);

new tabris.Button({
	id:'exitButton',
	text: "I'm Sorry!",
	centerX: 0,
	top: ['#madman', 20],
}).appendTo(landingPage);
