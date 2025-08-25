import "./App.css";

const App = () => {
  return (
    <>
      <div className="background">
        <video
          src="/drone.mp4"
          type="video/mp4"
          autoPlay
          loop
          style={{
            borderRadius: "12px",
            width: "95vw",
            height: "95vh",
            objectFit: "cover",
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="app">
        <h1 className="app__title">Title or whateva</h1>
        <div className="app__section-container">
          <div className="app__left">
            <h2 className="app__left_title">Cinema</h2>
          </div>
          <div className="app__right">
            <h2 className="app__right_title">Videography</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
