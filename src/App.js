import react, { component } from "react";
import "./App.css";
import "./index.css";

import myImage from "./eminem1.jpg";
import myVideo from "./gym.mp4";

function App() {
  return (
    <div className="App">
      <h1 className="title-red">wajih amara</h1>

      <br />
      <div style={{ border: "solid 1px black", width: "100vw" }}>
        <img src="/eminem.jpg" />
        <br />
        <img src={myImage} />
      </div>

      <video style={{ width: 320, height: 240 }}>
        <source src={myVideo} />
      </video>
    </div>
  );
}

export default App;
