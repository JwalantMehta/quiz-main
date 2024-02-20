// import $ from 'jquery';
// import 'jquery-validation';

$(function() {
    $('#loginForm').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20,
            }
        },

        messages: {
            email: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address",
            },
            password: {
                required: "Please enter a valid password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must be at most 20 characters long",
            }
        },
    });
});
