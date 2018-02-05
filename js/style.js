$(function(){
   
   $(window).resize(function(){
        var _webtop=$('#web_top').offset().top,
        _edmtop=$('#edm_top').offset().top,
        _printtop=$('#print_top').offset().top,
        _menutop=$('.menu').outerHeight();


     $('a#WebGo').click(function() {
     	 $('html,body').animate({
           scrollTop:_webtop-_menutop
           
                },300);
           return false;
     });  


      $('a#EdmGo').click(function() { 
     	 $('html,body').animate({
           scrollTop:_edmtop-_menutop
                },300);
           return false;
     }); 

       $('a#PrintGo').click(function() {
     	 $('html,body').animate({
           scrollTop:_printtop-_menutop
                },300);
           return false;
     }); 
 
   if($(window).innerWidth()<=736){
   	$("#mobile_click").on("click", OPENOPEN );
	function OPENOPEN(){
	 	$(".menu").show();
		$(".xxx").on("click", CLOSECLOSE );
	}
	function CLOSECLOSE(){
		$(".menu").hide();
		$(".xxx").off("click");
	}

    $('a#WebGo').click(function() {
    	$(".menu").hide();
     	 $('html,body').animate({
           scrollTop:_webtop-_menutop
           
                },300);
           return false;
     });  


    $('a#EdmGo').click(function() { 
      	$(".menu").hide();
     	 $('html,body').animate({
           scrollTop:_edmtop-_menutop
                },300);
           return false;
     }); 

    $('a#PrintGo').click(function() {
       	$(".menu").hide();
     	 $('html,body').animate({
           scrollTop:_printtop-_menutop
                },300);
           return false;
     }); 



    
   }else{
   	$(".menu").removeAttr("style");
   }







   }).resize();

  
 


    
     
  
	
});