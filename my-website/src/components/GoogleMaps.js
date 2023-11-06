import React, { Component } from "react"

class GoogleMaps extends Component {

    componentDidMount() {
        const script = document.createElement("script")
        const googleMapsAPIKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=initMap`;
        script.async = true
        script.defer = true
        script.addEventListener("load", this.initMap)
        document.head.appendChild(script)
    }

    initMap() {
        let lat = -9.653625200974435; 
        let lng = -35.70435325056125;

        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: lat, lng: lng },
            zoom: 16, 
        })

        new window.google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: "Your Location",
        })
    }

    render() {
        return (
            <div>
                <div id="map" style={{ height: "400px" }}></div>
                <small>Maceio, Alagoas, Brazil.</small>
            </div>
        )
    }
}

export default GoogleMaps