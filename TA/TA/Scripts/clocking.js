$(document).ready(function () {

    $("#Start").click(function () {
        callEndPoint('Start')
        .done(function () {
            alert("Success.");
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });

    $("#LunchStart").click(function () {
        callEndPoint('LunchStart')
        .done(function () {
            alert("Success.");
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });
    $("#LunchEnd").click(function () {
        callEndPoint('LunchEnd')
        .done(function () {
            alert("Success.");
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });
    $("#End").click(function () {
        callEndPoint('End')
        .done(function () {
            alert("Success.");
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });

    var callEndPoint = function (action) {
        return $.ajax({
            dataType: 'json',
            url: '/Clocking/' + action
        });
    }

});