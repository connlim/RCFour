import { Person, PersonPin } from "@mui/icons-material";
import { Avatar, Fab, IconButton, Tooltip } from "@mui/material";
import { Marker } from "react-map-gl";
import { useAppSelector } from "../../features/app/hooks";
import { auth } from "../../firebase/init";

const CurrentMarker = () => {
  const { currLocation } = useAppSelector((state) => state.events);

  return currLocation ? (
    <Marker anchor="bottom" latitude={currLocation.latitude} longitude={currLocation.longitude}>
      <Tooltip title="You">
        <Avatar src={auth.currentUser?.photoURL ?? undefined} sx={{ boxShadow: 10 }} />
      </Tooltip>
    </Marker>
  ) : null;
};

export default CurrentMarker;
