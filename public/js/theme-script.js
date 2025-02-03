

jQuery(document).ready(function($){
	"use strict";
  
    /*------------------------------- brand carousel ---------------------------------------*/
    
    $(function(){
        $("#brand-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 3,
            slideSpeed : 300,
            paginationSpeed : 400,
            pagination: false,
            navigation: false,
        });
        
        // $("#brand-carousel-2").owlCarousel({
        //     autoPlay: 4000, //Set AutoPlay to 3 seconds
        //     singleItem:true,
        //     slideSpeed : 300,
        //     paginationSpeed : 700,
        //     pagination: false,
        //     navigation: false,
        // });
    });
})
