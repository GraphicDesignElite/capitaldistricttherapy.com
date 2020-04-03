
(function($) {          
    $(document).ready(function(){   
        $("#contact-form").validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 1,
                },
                lastname: {
                    required: true,
                    minlength: 1,
                },
                email: {
                    required: true,
                    minlength: 2,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 10
                },
                reason: {
                    required: true,
                }
            },
            messages: {
                firstname: {
                    required: "Your first name is required.",
                    minlength: "Your first name is required."
                },
                lastname: {
                    required: "Your last name is required.",
                    minlength: "Your last name is required."
                },
                email: {
                    required: "Please provide a valid email address.",
                    email:"Please provide a valid email address.",
                },
                phone: {
                    required: "A valid phone number is required.",
                    minlength: "A valid phone number is required."
                },
                reason: {
                    required: "Please provide a reason for contact."
                }
            },
            submitHandler: function(form) {  
                grecaptcha.execute();

           }
        });
 

        $("#consultation-form").validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 1,
                },
                lastname: {
                    required: true,
                    minlength: 1,
                },
                email: {
                    required: true,
                    minlength: 2,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 10
                },
                service: {
                    required: true
                },
                day: {
                    required: true
                },
                start: {
                    required: true
                },
                end: {
                    required: true
                },
                servicetype: {
                    required: true
                }
            },
            messages: {
                firstname: {
                    required: "Your first name is required.",
                    minlength: "Your first name is required."
                },
                lastname: {
                    required: "Your last name is required.",
                    minlength: "Your last name is required."
                },
                email: {
                    required: "Please provide a valid email address.",
                    email:"Please provide a valid email address."
                },
                phone: {
                    required: "A valid phone number is required.",
                    minlength: "A valid phone number is required."
                },
                service: {
                    required: "Please select a type of therapy."
                },
                day: {
                    required: "Please choose a day for your consultation."
                },
                start: {
                    required: "Please choose a start time."
                },
                end: {
                    required: "Please provide an end time."
                }
        },
        submitHandler: function(form) {  
                grecaptcha.execute();

            }
        });
    });
})(jQuery);
