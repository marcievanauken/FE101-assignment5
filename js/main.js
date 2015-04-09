$(document).ready(function(){

	console.log('My page loaded!');

    //function for buttonsArgue div -- the buttons do not get a long
    $("#buttonOne").click(function(){
        $("#resultOne p").show();
        $("#resultTwo p").hide();
    });
    
    $("#buttonTwo").click(function(){
        $("#resultOne p").hide();
        $("#resultTwo p").show();
    });






});