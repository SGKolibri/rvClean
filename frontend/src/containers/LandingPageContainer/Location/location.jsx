import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
import { HiMiniMapPin } from "react-icons/hi2";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position = { lat: 50.841969769929996, lng: 4.36233890289023 }

export default function Location() {

    const { t } = useTranslation();


    const { isLoaded } = useJsApiLoader({
        id: import.meta.env.VITE_GOOGLE_MAPS_ID,
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    return isLoaded ? (
        <div id='location' className="w-full h-full flex flex-col justify-center items-center text-center font-montserrat text-black tracking-widest pt-2 pb-6">
            <h1 className="text-3xl md:text-5xl pb-[6px] md:pb-[12px] flex gap-1 items-center font-semibold">
                <HiMiniMapPin className="inline w-10 h-10 text-[#6dbbff] text-4xl" />
                {t("location.title")}
            </h1>
            <p className="text-base md:text-xl text-balance px-1 pb-[10px] md:pb-[16px]">
                {t("location.subtitle")}
                <br />
            </p>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                defaultCenter={position}
                zoom={16}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
            >
                <>
                    <Marker position={position} />
                </>
            </GoogleMap>
        </div >
    ) : <></>

}