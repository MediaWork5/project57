/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    $('.count1').countTo();
    $('.count2').countTo();
    $('.count3').countTo();
    
    
    //// funny text
    
    $('.myfirst-funny').funnyText({
        
        speed: 300,
		borderColor: "black",
		activeColor: "transparent",
		fontSize: "60px",
		direction: "both"
        
    });    
    
    
    
    
    $('.mylist li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        //window.console.log($(this).data('class'));
        $(".work .complex").hide();
        $("." + $(this).data('class')).fadeIn(500);
    });
    
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
        scrollButton.click(function(){
            
            $("html, body").animate({ scrollTop: 0}, 2000);
            
        });
        
    });
    
    
    // special for navbar addation
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() >=500){
            
            $("#navbar").css({"position":"fixed"});
            $("#navbar").css({"margin-top":"-7px"});
        }
        else{
            
            $("#navbar").css({"position":"relative"});
        }
        
    });
    
    
   
    
        //starting the carousel1111111111111
    $('.autoplay1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 3
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay2').slick({
    
    });
    });

    
    
    
    
    
});



