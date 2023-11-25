
var map = L.map('map', {
    center: [51.6000, 19.9883],
    zoom: 10,
    scrollWheelZoom: false
});

var myIcon = L.icon({
    iconUrl: '../images/pin.png',
    iconSize: [170, 81],
    iconAnchor: [85, 40],
    popupAnchor: [0, 0],
});

/*  L.marker([51.31503, 21.95320], {icon: myIcon}).addTo(map)
    .openPopup();


    L.tooltip([51.32192509451855, 21.95014348026683], {content: '<strong>Wzgórze Trzech Krzyży</strong><br />'})
    .addTo(map); */

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$('nav a').mouseenter(
    function(){
        var boxicons = $(this).find('i').attr('class').substring(3);
        $(this).find('i').removeClass(boxicons).addClass('bxs'+ boxicons.substring(2));
    },
);
$('nav a').mouseleave(
    function(){
        var boxicons = $(this).find('i').attr('class').substring(3);
        console.log(boxicons)
        $(this).find('i').removeClass(boxicons).addClass('bx'+ boxicons.substring(3));
    },
);