// jQuery(document).ready( function () {} );


jQuery(document).ready( function () {

    // a call-back function is anonymous so it has no name.
    $("#light-off").click(function() {
        $("body").css({"background-color": "black", "color": "white"});     
    });
    $("#light-on").click(function() {
        /*
        $("body").css({"background-color": "white", "color": "black"});
        */
       // using objects with key-value pairs for multiple different properties
       $("body").css({"background-color": "white"});
       // changing single property name and value separated by comma
       $("body").css("color", "black");
    });
    /*
     *  alternate way to call jQuery more efficiently
    $("#light-on").click(function() {
        var body = $("body");
        body.css({"background-color": "white"});
        body.css("color", "black");
    });
    */
   // Add an element to the web page  .append()
   $("ol").append("<li>this was added after the fact.</li>");
   $("body").append("<h1>New section</h1><p>Welcome to this new section</p>");

   // adds element to start of the child list, .prepend()
   $("body").prepend("<h1 style='color: red'>New virus</h1>");

   setTimeout(function () {
    $("body").append("Added after timeout.");
    $("ul").html("<li>All tasks done!</li>");
   }, 5000);

   // adds an html element as a child, replaces existing children .html();
   $("#recycleButton").click(function () {
    
    // removes the element you selected
    $('body').remove();
    
   /*
    // removes all children of the element you selected
    $('body').empty();
   */
   });

} );



