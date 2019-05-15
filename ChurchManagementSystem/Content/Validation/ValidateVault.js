
var vault = function () {
    var escalationPhoneNoV = $("#EscalationPhoneNoV");
    var emailSuffixV = $("#EmailSuffixV");
    var escalationEmailsV = $("#EscalationEmailsV");
    var contactEmailV = $("#ContactEmailV");
    var contactPhoneNumberV = $("#ContactPhoneNumberV");
    var contactLastName = $("#ContactLastName");
    var contactFirstNameV = $("#ContactFirstNameV");
    var addressLine1V = $("#AddressLine1V");
    var nameV = $("#NameV");
    var stateV = $("#StateV");
    var cityV = $("#CityV");

    
        var sEmail = $('#ContactEmail').val();
        var sEmailSuffix = $('#EmailSuffix').val();
        // Checking Empty Fields
    if ($("#ContactFirstName").val() == "" || $("#Name").val() == "" || $("#EscalationPhoneNo").val() == "" || $("#EmailSuffix").val() == "" || $("#ContactPhoneNumber").val() == "" || $("#ContactEmail").val() == "" || validateEmail(sEmail) == false || validateEmailSuffix(sEmailSuffix) == false) {
       

        if (validateEmail(sEmail) == false) {
            contactEmailV.css({ "color": "red" });
        } else {
            contactEmailV.css({ "color": "black" });
        }
        if (validateEmailSuffix(sEmailSuffix) == false) {
            emailSuffixV.css({ "color": "red" });
        } else {
            emailSuffixV.css({ "color": "black" });
        }
        if ($('#EscalationPhoneNo').val() == "") {
            escalationPhoneNoV.css({ "color": "red" });
        } else {
            escalationPhoneNoV.css({ "color": "black" });

        }
        if ($('#EmailSuffix').val() == "") {
            emailSuffixV.css({ "color": "red" });
        } else {
            emailSuffixV.css({ "color": "black" });
        }
        if ($('#EscalationEmails').val() == "") {
            escalationEmailsV.css({ "color": "red" });
        } else {
            escalationEmailsV.css({ "color": "black" });
        }
        if ($('#ContactPhoneNumber').val() == "") {
            contactPhoneNumberV.css({ "color": "red" });
        } else {
            contactPhoneNumberV.css({ "color": "black" });
        }
        if ($('#ContactFirstName').val() == "") {
            contactFirstNameV.css({ "color": "red" });
        } else {
            contactFirstNameV.css({ "color": "black" });
        }
        if ($('#Name').val() == "") {
            nameV.css({ "color": "red" });
        } else {
            nameV.css({ "color": "black" });
        }

        event.preventDefault();

    } else {
        alert('All fields are correct');

        $('#btnValidate').unbind('click');;


    }
}
function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmailSuffix(sEmail1) {
    //var filter = /^[@@]+[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var filter = /^[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail1)) {
        return true;
    }
    else {
        return false;
    }
}
$(document).ready(function () {

    $('#btnValidate').click(function (event) {

        vault();


    });
    $('#btnValidate1').click(function (event) {

        vault();


    });


    // Function that validates email address through a regular expression.


});
 
