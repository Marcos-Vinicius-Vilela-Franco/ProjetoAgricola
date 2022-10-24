
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function Mapa() {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_API_GOOGLE
    })
    
    const position = {
        lat: -17.888981,
        lng: -51.721217
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={position}
            zoom={15}
        >
            <Marker position={position} />
        </GoogleMap>

    ) : <></>
}