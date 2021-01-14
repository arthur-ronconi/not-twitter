import { ComposeTweet } from "./components/ComposeTweet";
import "./App.scss";

const { Navbar } = require("./components/Navbar");
const { Timeline } = require("./components/Timeline");

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row my-4">
          <div className="col-6 mx-auto">
            <ComposeTweet />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mx-auto">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
