var RequestOK = false;

var FormElementsInputs = ["contact__input--name", "contact__input--phone",
    "contact__input--email", "contact__input--details"];

window.addEventListener("load", (event) => {
    $("form").on("submit", function (event) {
        event.preventDefault();
        RequestOK = false;

        $.ajax({
            type: "POST",
            url: "https://formspree.io/f/xqkgbdoj",
            dataType: "json",
            data: $(this).serialize(),
            success: function() {
                RequestOK = true;
            },
        });

        provideUserFeedback();
    });

    FormElementsInputs.forEach(element => {
        $('.' + element).focus(function () {
            if (RequestOK) {
                clearFormElementsInputs();
                $("#contact-submit-button").val("Submit");
                RequestOK = false; // User is possibly trying to submit another form.
            }
        });
    });

});

var provideUserFeedback = function () {
    if (RequestOK) {
        $("#contact-submit-button").val("Submitted!");
    }

    else {
        alert("We're sorry, there was a problem with your submission." +
        " Please check your internet connection and try again.");
    }
}

var clearFormElementsInputs = function () {
    FormElementsInputs.forEach(element => {
        $('.' + element).val('');
    });
}


