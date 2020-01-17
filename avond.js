// if(error == true){

//     // Your application has indicated there's an error
//     window.setTimeout(function(){

//         // Move to a new location or you can do something else
//         window.location.href = "https://www.nu.nl";

//     }, 3000);

// }
var today = new Date();

var time = today.getHours()

console.log(time)

if(time > 1 && time < 5){
	loadjscssfile("thesis.css", "css") ////dynamically load and add this .css file
}


function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}