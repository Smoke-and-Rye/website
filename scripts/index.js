

window.addEventListener("load", (event) => {
    $("form").on("submit", function (event) {
        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "https://formspree.io/f/xqkgbdoj",
            dataType: "json",
            data: $(this).serialize(),
            success: function() {
                alert("Success!");
            }
        });

        //TODO: Clear input content & change button text to "Submitted!"
        //      When user focuses any input element, revert submit button.

    });
});


