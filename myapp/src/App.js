import "./App.css";
import Contact from "./glint/contact";
import About, { Extras } from "./glint/features";
import General from "./glint/general";
import Header from "./glint/header";

// iphone 11 414 * 896
function App() {
  return (
    <>
      <div id="main-div">
        <Header />
        <General />
        <About />
        <Extras />
        <Contact />
      </div>
    </>
  );
}

export default App;
