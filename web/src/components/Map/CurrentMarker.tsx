import { Avatar, Badge, Tooltip } from "@mui/material";
import { Marker, Popup } from "react-map-gl";
import { useAppSelector } from "../../features/app/hooks";
import { auth } from "../../firebase/init";

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
        latitude={currLocation.latitude}
        longitude={currLocation.longitude}
      ></Marker>
    </>
  ) : null;
};

export default CurrentMarker;
