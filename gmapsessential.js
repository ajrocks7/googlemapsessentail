<script>

var addresses = @json($mappoints);
console.log(addresses);
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var map;
        var bounds;
        var startlabel = 'A';
        var endlabel = 'B';
        function initialize() {
            directionsDisplay = new google.maps.DirectionsRenderer();
            var latlng = new google.maps.LatLng(13.0827, 80.2707);
            var uluru = { lat : 13.526167 , lng : 80.073917 };
            var uluru2 = { lat : 13.3353 , lng : 80.1443 };
            var uluru3 = { lat : 13.1585 , lng : 80.2037 };
            var mapOptions = { zoom: 10,center: latlng }
            map = new google.maps.Map(document.getElementById('sitemap'), mapOptions);
            directionsDisplay.setMap(map);
            bounds = new google.maps.LatLngBounds();
         //   "13.03485500,80.15581800", "13.00856600,80.19613600", "#669DF6"
         
         var service = new google.maps.places.PlacesService(map);
         var service2 = new google.maps.places.PlacesService(map);
         var service3 = new google.maps.places.PlacesService(map);
         //petrol pumps

service.nearbySearch(
 {

     location: uluru,
radius:15000,
 type: ['gas_station'],
 },
 callbackpetrol);

 function callbackpetrol(results, status) {
 if (status === google.maps.places.PlacesServiceStatus.OK)
 {
 for (var i = 0; i < results.length; i++)
 {
     createMarkerpetrol(results[i]); }
 }
 }

 function createMarkerpetrol(place)
 {
    var rad = function(x) {
  return x * Math.PI / 180;
};
     var placeLoc = place.geometry.location;
     var placeLat = place.geometry.location.lat();
     var placeLon = place.geometry.location.lng();
     var brokerlat = "13.526167";
     var brokerlon = "80.073917";
     var contentString = "<p>+place.name+</p>";
 //find distance
 var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(placeLat - brokerlat);
  var dLong = rad(placeLon - brokerlon);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(placeLat)) * Math.cos(rad(brokerlat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  var convertmetre = (parseFloat(d)/1000).toFixed(2);
   //find distance
 var table="";
 table+='<tr><td>'+place.name+'</td>';
 table+='<td>'+convertmetre+" "+""+"KM"+'</td>';
 table+='<td>'+placeLat+'</td>';
 table+='<td>'+placeLon+'</td></tr>';
 var marker = new google.maps.Marker({ map: map, position: place.geometry.location,icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', mapId: '1384d469ad61780c' });
 google.maps.event.addListener(marker, 'click', function() { infowindow.setContent(place.name); infowindow.open(map, this); });
     $("#petroltable").append(table);
 //alert(place.name);
 }


 service2.nearbySearch(
 {

     location: uluru2,
radius:15000,
 type: ['gas_station'],
 },
 callbackpetrol2);

 function callbackpetrol2(results, status) {
 if (status === google.maps.places.PlacesServiceStatus.OK)
 {
 for (var i = 0; i < results.length; i++)
 {
     createMarkerpetrol2(results[i]); }
 }
 }

 function createMarkerpetrol2(place)
 {
    var rad = function(x) {
  return x * Math.PI / 180;
};
     var placeLoc = place.geometry.location;
     var placeLat = place.geometry.location.lat();
     var placeLon = place.geometry.location.lng();
     var brokerlat = "13.0827";
     var brokerlon = "80.2707";
     var contentString = "<p>+place.name+</p>";
 //find distance
 var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(placeLat - brokerlat);
  var dLong = rad(placeLon - brokerlon);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(placeLat)) * Math.cos(rad(brokerlat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  var convertmetre = (parseFloat(d)/1000).toFixed(2);
   //find distance
 var table="";
 table+='<tr><td>'+place.name+'</td>';
 table+='<td>'+convertmetre+" "+""+"KM"+'</td>';
 table+='<td>'+placeLat+'</td>';
 table+='<td>'+placeLon+'</td></tr>';
 var marker = new google.maps.Marker({ map: map, position: place.geometry.location,icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', mapId: '1384d469ad61780c' });
 google.maps.event.addListener(marker, 'click', function() { infowindow.setContent(place.name); infowindow.open(map, this); });
     $("#petroltable").append(table);
 //alert(place.name);
 }

 service3.nearbySearch(
 {

     location: uluru3,
radius:15000,
 type: ['gas_station'],
 },
 callbackpetrol3);

 function callbackpetrol3(results, status) {
 if (status === google.maps.places.PlacesServiceStatus.OK)
 {
 for (var i = 0; i < results.length; i++)
 {
     createMarkerpetrol3(results[i]); }
 }
 }

 function createMarkerpetrol3(place)
 {
    var rad = function(x) {
  return x * Math.PI / 180;
};
     var placeLoc = place.geometry.location;
     var placeLat = place.geometry.location.lat();
     var placeLon = place.geometry.location.lng();
     var brokerlat = "13.0827";
     var brokerlon = "80.2707";
     var contentString = "<p>+place.name+</p>";
 //find distance
 var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(placeLat - brokerlat);
  var dLong = rad(placeLon - brokerlon);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(placeLat)) * Math.cos(rad(brokerlat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  var convertmetre = (parseFloat(d)/1000).toFixed(2);
   //find distance
 var table="";
 table+='<tr><td>'+place.name+'</td>';
 table+='<td>'+convertmetre+" "+""+"KM"+'</td>';
 table+='<td>'+placeLat+'</td>';
 table+='<td>'+placeLon+'</td></tr>';
 var marker = new google.maps.Marker({ map: map, position: place.geometry.location,icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', mapId: '1384d469ad61780c' });
 google.maps.event.addListener(marker, 'click', function() { infowindow.setContent(place.name); infowindow.open(map, this); });
     $("#petroltable").append(table);
 //alert(place.name);
 }

 var infowindow = new google.maps.InfoWindow({
  content: name,
});



//petrol pumps
           //console.log(value);
        
          new google.maps.Marker({ position: {lat: parseFloat(13.526167), lng: parseFloat(80.073917)},label:startlabel, map: map });
          new google.maps.Marker({ position: {lat: parseFloat(13.0827), lng: parseFloat(80.2707)},label:endlabel, map: map });
      
            


       

var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(13.00856600 - 13.03485500);
  var dLong = rad(80.19613600 - 80.15581800);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(13.03485500)) * Math.cos(rad(13.00856600)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  var convertmetre = (parseFloat(d)/1000).toFixed(2);
  console.log(convertmetre+"Km");


        }
        var rad = function(x) {
  return x * Math.PI / 180;
};




        // delay between directions requests
        var delay = 100;

       
        function calcRoute() {
    var start = new google.maps.LatLng(13.526167,80.073917);
    var end = new google.maps.LatLng(13.0827, 80.2707);
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
  }
  calcRoute();
        initialize();
        /* addresses.forEach(function(v, i) {
        setTimeout(calcRoute(addresses[i][0], addresses[i][1]), 100);
        }); */
        // google.maps.event.addDomListener(window, "load", initialize);
        // ======= Global variable to remind us what to do next
        var nextAddress = 0;

        // ======= Function to call the next Geocode operation when the reply comes back

      

        // This Javascript is based on code provided by the
        // Community Church Javascript Team
        // https://www.bisphamchurch.org.uk/
        // https://econym.org.uk/gmap/


      
    </script>