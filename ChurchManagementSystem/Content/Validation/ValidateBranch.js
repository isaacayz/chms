
var vault = function () {
    var nameV = $("#NameV");
    var branchDetailsV = $("#BranchDetailsV");
    var coordinatesV = $("#CoordinatesV");


    // Checking Empty Fields
    if ($("#BranchDetails").val() == "" || $("#Name").val() == "" || $("#Coordinates").val() == "") {
     

        if ($('#Name').val() == "") {
            nameV.css({ "color": "red" });
        } else {
            nameV.css({ "color": "black" });
        }
        if ($('#BranchDetails').val() == "") {
            branchDetailsV.css({ "color": "red" });
        } else {
            branchDetailsV.css({ "color": "black" });
        }
        if ($('#Coordinates').val() == "") {
            coordinatesV.css({ "color": "red" });
        } else {
            coordinatesV.css({ "color": "black" });

        }

        event.preventDefault();

    } else {
        alert('All fields are correct');

        $('#btnValidate').unbind('click');;


    }
}

$(document).ready(function () {

    $('#btnValidate').click(function (event) {

        vault();


    });



    // Function that validates email address through a regular expression.


});

