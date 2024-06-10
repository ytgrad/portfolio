import "./index.css";
import Intro from "./Intro";
import Mobile from "./Mobile";
import Nav from "./Nav";

function App() {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <Mobile />
    </div>
  );
}

export default App;
