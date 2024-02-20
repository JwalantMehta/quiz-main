$(document).ready(function() {
    $('#registrationForm').validate({
      rules: {
        username: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        confirm_password: {
          required: true,
          equalTo: "#password"
        }
      },
      messages: {
        username: "Please enter your username",
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please enter your password",
          minlength: "Password must be at least 8 characters long"
        },
        confirm_password: {
          required: "Please confirm your password",
          equalTo: "Passwords do not match"
        }
      }
    });
  });