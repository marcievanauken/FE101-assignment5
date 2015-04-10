$(document).ready(function(){

	console.log('My page loaded!'); //to make sure js file is linked

    //function for buttonsArgue div -- the buttons do not get a long
    $("#buttonOne").click(function(){
        $("#resultOne p").show();
        $("#resultTwo p").hide();
    });
    
    $("#buttonTwo").click(function(){
        $("#resultOne p").hide();
        $("#resultTwo p").show();
    });





    //function for dontHover div -- it's an angry yellow square
	 $(".dontHover").mouseover(function(){
        $(".hover").show();
        $(".noHover").hide();
    });

	 $(".dontHover").mouseout(function(){
        $(".noHover").show();
        $(".hover").hide();
    });


    //another way of doing above
     $("#dontHover").mouseover(function(){
        $('#noHover').html("<strong>Hey, I told you not to hover over me!</strong>");
    });
    $("#dontHover").mouseout(function(){
        $('#noHover').html('Don\'t hover over me!');
    });

    


    //toggling 2 items
    $('.toggle-me').click(function(){
     $('.text1').toggle();
    });






});