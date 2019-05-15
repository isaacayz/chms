$(document).ready(function () {

    $(".btnValidate").on("click", function () {
        // e.preventDefault();
        var name = $("#Name").val();
        var firstname = $("#ContactFirstName").val();
        var lastname = $("#ContactLastName").val();
        var PhoneNo = $("#ContactPhoneNumber").val();
        var Email = $("#ContactEmail").val();
        var AccountCode = $("#AccountCode").val();
        var escla_email = $("#EscalationEmails").val();
        var escla_phone = $("#EscalationPhoneNo").val();
        var IsBank = $("#IsBank").val();
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

        if (firstname.length == 0) {

            contactFirstNameV.css({ "color": "red" });
            alert("First Name is Required");
            return false;
        } else if (lastname.length == 0) {
            contactLastName.css({ "color": "red" });
            alert("Last Name is Required");
            return false;
        }
        else if (PhoneNo.length == 0) {
            contactPhoneNumberV.css({ "color": "red" });
            alert("Phone Number is Required");
            return false;
        }
        else if (Email.length == 0) {
            contactEmailV.css({ "color": "red" });
            alert("Email Address is Required");
            return false;
        }
        else if (AccountCode.length == 0) {
            alert("Account Code is Required");
            return false;
        }
        else if (escla_email.length == 0) {
            alert("Escalation Email is Required");
            return false;
        }

        else if (escla_phone.length == 0) {
            alert("Escalation PhoneNumber is Required");
            return false;
        }

        else if (IsBank.length == 0) {
            alert("IsBank is Required");
            return false;
        }

        else {
            return true;
        }
    });

});