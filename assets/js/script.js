
// jshint esversion: 6
/*jshint sub:true*/
//Script for active navigation menu
$(document).ready(function () {
    $("ul.navbar-nav > li > a").click(
      function (e) {
        $("ul.navbar-nav > li").removeClass("active");
        $("ul.navbar-nav > li > a").css("color", "");
        $("ul.navbar-nav > li > a").css("background", "");  
        $(this).addClass("active");
        $(this).css("color", "green");
        $(this).css("background", "white");
    });
});



console.log("Test JS link is working")


/* jshint esversion: 8 */

