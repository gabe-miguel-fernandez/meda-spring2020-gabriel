// jQuery(document).ready( function () {} );


jQuery(document).ready( function () {

    console.log("hello");

    jQuery("div > p span#special").css( {"font-size": "100px", "color": "pink"} );

    jQuery("ul").css({
        "border": "10px solid green"
    });

    jQuery("button").click(function () {
        console.log("hello");

        jQuery("body").css({
            "background-color": "yellow"
        });

        jQuery("h1").css({
            "margin-top": "500px"
        });
    });

    $("body").append("This was added by jQuery.")

} );



