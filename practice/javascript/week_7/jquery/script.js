// jQuery(document).ready( function () {} );


jQuery(document).ready( function () {

    $("body").empty();

    // add headline with dashed border
    $("body").append("<h1 style='border-style: dashed solid'>Welcome</h1>");

    // add paragraph
    $("body").append("<p>Topic One</p>");
    $("body").append("<ul id=myList></ul>");

    // add an unordered list
    $("#myList").append("<li>item 1</li>");
    $("#myList").append("<li>item 2</li>");
    $("#myList").append("<li>item 3</li>");
    $("#myList").css("border-style", "solid");
    $("#myList").css("background-color", "gray");

    // remove second item in unordered list
    $("#myList > li:nth-child(2)").remove();
    /*
    $("li").[1].remove();
    $("li").child.next();
    */

    // jQuery .next(), .prev()
    // jQuery .parent(), .children()

    $("body").children("ul").children("li")[1];
    $("body").children("ul").prev().next();

    // selects html element
    $("body").parent();

    // selects head element
    $("body").prev();


} );



