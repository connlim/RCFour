import MainMap from "../components/Map/MainMap";

const HomePage = () => {
  return (
    <div
      style={{
        padding: "0px",
        margin: "0px",
        marginTop: "68px",
        height: "calc(100vh - 68px)",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -99,
      }}
    >
      <MainMap />
    </div>
  );
};

export default HomePage;
