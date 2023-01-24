import "./App.css";
import Contact from "./glint/contact";
import About, { Extras } from "./glint/features";
import General from "./glint/general";
import Header from "./glint/header";
import Skills from "./glint/skills";

// iphone 11 414 * 896
function App() {
  return (
    <>
      <div id="main-div">
        <Header />
        <General />
        <About />
        <Extras />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
