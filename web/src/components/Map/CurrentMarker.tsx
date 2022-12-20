import { Marker, Popup } from "react-map-gl";
import { useAppSelector } from "../../features/app/hooks";

const CurrentMarker = () => {
  const { currLocation } = useAppSelector((state) => state.events);

  return currLocation ? (
    <>
      <Popup
        longitude={currLocation.longitude}
        latitude={currLocation.latitude}
        anchor="top"
        closeButton={false}
        closeOnClick={false}
      >
        You are here
      </Popup>
      <Marker
        anchor="bottom"
        color="red"
        latitude={currLocation.latitude}
        longitude={currLocation.longitude}
      />
    </>
  ) : null;
};

export default CurrentMarker;
