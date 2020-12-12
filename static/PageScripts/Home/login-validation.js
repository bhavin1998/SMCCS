var Login = function () {
    return {
        //main function to initiate the module
        init: function () {
            //Login form validation
            $('#login-form').validate({
                errorElement: 'span', //default input error message container
                errorClass: 'has-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                rules: {
                    UserName: {
                        required: true,
                        maxlength: 50,
                        email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                    },
                    Password: {
                        required: true,
                        maxlength: 20,
                        regex: /^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])\S*$/i
                    }
                },
                messages: {
                    UserName: {
                        required: "Registered email address is required."
                    },
                    Password: {
                        required: "Password is required."
                    }
                },
                //invalidHandler: function (event, validator) { //display error alert on form submit   

                //},

                highlight: function (element) { // hightlight error inputs
                    $(element)
                            .closest('.form-group').addClass('has-error'); // set error class to the control group
                },
                unhighlight: function (element) { // revert the change dony by hightlight
                    $(element)
                            .closest('.form-group')
                            .removeClass('has-error') // set error class to the control group
                            .addClass('has-success');
                },
                success: function (label) {
                    label.closest('.form-group');
                    label.remove();

                },
                errorPlacement: function (error, element) {
                    error.addClass('text-danger').insertAfter(element.closest('.form-group'));
                },
                submitHandler: function (form) {
                    // window.location.href = $("#dataRepo").data("urlDashboard");
                    form.submit();
                }
            });

            //Submit on enter for login
            $('#login-form input').keypress(function (e) {
                if (e.which == 13) {
                    if ($('#login-form').validate().form()) {
                        $('#login-form').submit();
                        //window.location.href = $("#dataRepo").data("urlDashboard"); //"index.html";
                        //return true;
                    }
                    return false;
                }
            });
        }
    };
}();
