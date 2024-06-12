import "./index.css";
import Intro from "./Intro";
import Mobile from "./Mobile";
import Nav from "./Nav";
import Splash from "./Splash";

function App() {
  return (
    <div className="container">
      <Splash />
      <Nav />
      <Intro />
      <Mobile />
    </div>
  );
}

export default App;
