$(document).ready(function () {

    $(".btnValidate").on("click", function() {
     // e.preventDefault();
        var firstname = $("#FirstName").val();
        var lastname = $("#LastName").val();
        var PhoneNo = $("#PhoneNo").val();
        var Email = $("#Email").val();

        if (firstname.length == 0) {

            alert("First Name is Required");
            return false;
        } else if (lastname.length == 0) {
            alert("Last Name is Required");
            return false;
        }
        else if (PhoneNo.length == 0) {
            alert("Phone Number is Required");
            return false;
        }
        else if (Email.length == 0) {
            alert("Email Address is Required");
            return false;
        } else
        {
            return true;
        }
    });

});