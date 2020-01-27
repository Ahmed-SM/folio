$(document).ready(function() 
{
    $('#Link0').click(function() 
    { 
        $('html, body').animate({
            scrollTop: $("#first").offset().top
        }, 2000);
    });
    $('#Link1').click(function() 
    { 
        $('html, body').animate({
            scrollTop: $("#second").offset().top
        }, 2000);
    });
    $('#Link2').click(function() 
    { 
        $('html, body').animate({
            scrollTop: $("#third").offset().top
        }, 1200);
    });  
    
});