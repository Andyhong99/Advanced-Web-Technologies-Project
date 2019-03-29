
///// <reference path="jquery-3.3.1.js" />

//$(document).ready(function () {
//    $('#play').on('click', playStop);
//    $('#media').on('play', function () { $('#play').html('Pause'); });
//    $('#media').on('pause', function () { $('#play').html('Play'); });
//    getLocation();
//});

//function playStop() {
//    var media = $('#media')[0];
//    if (media.paused) {
//        media.play();
//    }
//    else {
//        media.pause();
//    }
//}

function getLocation() {
    if (supportsGeolocation()) {
        watchId = navigator.geolocation.getCurrentPosition(showPosition
            , showError);
    }
    else {
        showMessage("Geolocation is not supported by this browser.");
    }
}

function supportsGeolocation() {
    return 'geolocation' in navigator;
}

function showMessage(message) {
    $('#message').html(message);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            showMessge("User denied Geolocation access request.");
            break;
        case error.POSITION_UNAVAILABLE:
            showMessage("Location information unavailable.");
            break;
        case error.TIMEOUT:
            showMessage("Get user location request timed out.");
            break;
        case error.UNKNOWN_ERROR:
            showMessage("An unknown error occurred.");
            break;
    }
}


function showPosition(position) {
    var mapcanvas = document.getElementById('map');
    var coords = new google.maps.LatLng(51.508742, -0.120850);
    var options = {
        zoom: 10,
        center: coords 
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapcanvas, options);
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: "You are here!"
    });
}

