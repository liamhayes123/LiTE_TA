$(document).ready(function () {

    $("#Start").click(function () {
        callEndPoint('Start')
        .done(function () {
            $('#siteSuccessMessage').text('Start');
            $('#siteSuccess').show();
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });

    $("#LunchStart").click(function () {
        callEndPoint('LunchStart')
        .done(function () {
            $('#siteSuccessMessage').text('LunchStart');
            $('#siteSuccess').show();
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });
    $("#LunchEnd").click(function () {
        callEndPoint('LunchEnd')
        .done(function () {
            $('#siteSuccessMessage').text('LunchEnd');
            $('#siteSuccess').show();
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    });
    $("#End").click(function () {
        callEndPoint('End')
        .done(function () {
            $('#siteSuccessMessage').text('End');
            $('#siteSuccess').show();
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