function validate() {
    $('#company').change(function () {
        if ($('#company').is(':checked')) {
            $('#companyInfo').css('display', 'inline');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    });
    $('#submit').on('click', function (ev) {
        let username = $('#username');
        let password = $('#password');
        let confirmPassword = $('#confirm-password');
        let email = $('#email');
        let companyNumber = $('#companyNumber');
        let validDiv = $('#valid');
        let valid = true;
        if (!/^[A-Za-z0-9]{3,20}$/g.test(username.val())) {
            valid = false;
            $(username).css('border-color', 'red');
        } else {
            $(username).css('border-color', '');
        }
        if (password.val() !== confirmPassword.val()) {
            valid = false;
            $(password).css('border-color', 'red');
            $(confirmPassword).css('border-color', 'red');
        } else {
            if (!/^[\w]{5,15}$/g.test(password.val())) {
                valid = false;
                $(password).css('border-color', 'red');
            } else {
                $(password).css('border-color', '');
            }
            if (!/^[\w]{5,15}$/g.test(confirmPassword.val())) {
                valid = false;
                $(confirmPassword).css('border-color', 'red');
            } else {
                $(confirmPassword).css('border-color', '');
            }
        }
        if (!/^[A-Za-z0-9]+@[A-Za-z0-9]*(\.[A-Za-z0-9]*)+$/g.test(email.val())) {
            valid = false;
            $(email).css('border-color', 'red');
        } else {
            $(email).css('border-color', '');
        }
        if ($('#company').is(':checked')) {
            if (companyNumber.val() < 1000 || companyNumber.val() > 9999) {
                valid = false;
                $(companyNumber).css('border-color', 'red');
            } else {
                $(companyNumber).css('border-color', '');
            }
        }
        if (valid) {
            validDiv.css('display', 'inline');
        } else {
            validDiv.css('display', 'none');
        }
        ev.preventDefault();
    });
}