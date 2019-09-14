$(document).ready(function() {
    $("#cost-slider").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 3000,
    });

    
    $("#map").googleMap({
        type: "ROADMAP" ,
        });
      
});