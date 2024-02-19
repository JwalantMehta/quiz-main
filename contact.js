$(document).ready(function(){
    $('#email').on('input', function() {
        $('#response').html(''); // Clear any previous error messages when the user types in the email field
    });

    $('#contactForm').submit(function(e){
        e.preventDefault();

        var email = $('#email').val();
        if (!validateEmail(email)) {
            $('#response').html('<p>Please enter a valid email address.</p>');
            return;
        }

        // Valid email format, submit form data
        $.ajax({
            type: 'POST',
            url: $('#contactForm').attr('action'),
            data: $('#contactForm').serialize(),
            success: function(response){
                $('#response').html(response);
                $('#name').val(''); // Clear name input
                $('#email').val(''); // Clear email input
                $('#message').val(''); // Clear message textarea
            }
        });
    });

    // Function to validate email format
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
