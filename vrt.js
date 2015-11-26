var screenshotUrl = 'http://localhost:8080';

casper.start( screenshotUrl )

.then(function () {
	phantomcss.screenshot('#navigationbar', 'navigationBar');
	phantomcss.screenshot('#content', 'content');
})


.then(function () {
	this.mouse.move("#navigationbar ul a.theFirst");
	phantomcss.screenshot('#navigationbar', 'navigationBar_link_hover');
});
 
casper.run();