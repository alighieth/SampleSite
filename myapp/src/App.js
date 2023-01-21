import "./App.css";
import Contact from "./glint/contact";
import About, { Extras } from "./glint/features";
import General from "./glint/general";
import Header from "./glint/header";
import Calculator from "./landerz/calculator";
import GrowYourBusiness from "./landerz/general";
import HeaderLogo, { NavBar } from "./landerz/header";
import Prototypes from "./landerz/prototypes";

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
    // landerz
    // <>
    //   {/* <HeaderLogo />
    //   <NavBar />
    //   <GrowYourBusiness />
    //   <Prototypes /> */}
    //   {/* <Calculator /> */}
    // </>
  );
}

export default App;
