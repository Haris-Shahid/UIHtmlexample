 $(function() {
    $("body").fadeIn(69000);        
    });
// term toggle menu
function slideDown() {

    $('#toggleMenu').slideToggle('slow');

}

// on moving button when you hover
function changeIn() {
    
    $("#pts").toggleClass('pts');
}

function changeOut() {
    
    $("pts").toggleClass('pts');
}

// on moving capsule button when you click
function move() {

    $('html, body').animate({ scrollTop: $('#rotate').offset().top }, 'slow');

}

$(function () {
    
    var $win = $(window);
    
    $win.scroll(function () {
        
        if ($win.scrollTop() > 500) {
        
            $('#rotate').fadeOut("slow");
        } 
        else {
    
            $('#rotate').fadeIn("slow");
        }
    });
});

$(function () {
    
    var $win = $(window);
    
    $win.scroll(function () {
        if($win.scrollTop() >= 1254) {
          
            $("#pro-h1,#pro-p").animate({"margin-left" : 10 , "opacity" : 1} , 'slow');
           
        }
         
        if($win.scrollTop() >= 6423){
            
            $("#footer-h1,#footer-p").animate({"margin-left" : 10 , "opacity" : 1} , 'slow');

            $("#icons").animate({"margin-top" : 0 , "opacity" : 1} , 'slow');
                   
        }
        if($win.scrollTop() >= 2776){
            
            $("#upcoming-h1").animate({"margin-left" : 10 , "opacity" : 1} , 'slow');
        }
        if($win.scrollTop() >= 3574){
           
            $("#current-openings-h1,#current-openings-p").animate({"margin-left" : 10 , "opacity" : 1} , 'slow');
           
           }
       
        });
    });
$(function() { 
 $("#list-1").click(function () {
            documnet.getElementById("list-1").style='display:show';
        });
});
       
