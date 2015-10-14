// to run this code use node integrate.js
var fs = require('fs');
var config = {};

//getting the editor template html and css.
config.css = fs.readFileSync('../css/stylesheet.css', 'utf8');
config.template = fs.readFileSync('../new.html', 'utf8');

//getting all the folder names from 'fiddles' directory
config.files = fs.readdirSync('../fiddles');

//to write final output in a single file.
config.writeFinal = (function(fileName, content){

		fs.writeFile('../final-fiddle/' + fileName + ".html", content , function (err) {
		if (err) throw err;
		});
});

//try create a directory if not exist and name it as 'final-fiddle'.
//inside the 'final-fiddle' creating a another directory name as 'css'.
try { 
	fs.mkdirSync('../final-fiddle'); 
	fs.mkdirSync('../final-fiddle/css');
	fs.writeFile('../final-fiddle/css/stylesheet.css', config.css , function (err) {
	if (err) throw err;
	});
 }
catch (e) { console.log("folder already exist.");}




//combining the two files content in a single file.
for(var i=0; i<config.files.length; i++ ) //config.files.length
{
	var fiddleContent = fs.readFileSync('../fiddles/' + config.files[i] + '/' + config.files[i] + '.html'); 
	var newText = config.template.replace("<textarea ></textarea>", "<textarea >" +  fiddleContent +"</textarea>");
	config.writeFinal(config.files[i], newText);	
}	

console.log("all files saved in final-fiddle.");
console.log("finish !!");

