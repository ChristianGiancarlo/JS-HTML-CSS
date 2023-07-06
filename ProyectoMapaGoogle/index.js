let marker;
let map;


function initMap(){
    const posicion = {
        lat: -34.397, lng: 150.644
    }

    map = new google.maps.Map(document.getElementById("map"),{
        zoom: 8,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posicion Inicial"
        
    })

    geoPosiciona()

    marcaPuntos()
}

function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc =  navigator.geolocation
        const options = {timeout : 6000}
        const watchPos = geoLoc.watchPosition(centraMapa,onError, options)
    }else{
        alert("Tu navegador no admite la geolocalizacion")
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(){
    console.error(error);
}

function marcaPuntos(){

    marker.nuevaPos = new google.maps.Marker({
        position: {lat: -12.05659, lng: -77.11814},
        map,
        title: "Callao, Peru"})  
    marker.nuevaPos = new google.maps.Marker({
        position: {lat: 35.698196, lng: 139.775469},
        map,
        title: "Akihabara"})
    marker.nuevaPos = new google.maps.Marker({
        position: {lat: 35.16667, lng: 138.68333},
        map,
        title: "Monte Fuji"}) 
        

}
