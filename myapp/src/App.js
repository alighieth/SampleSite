import "./App.css";
import GrowYourBusiness from "./components/general";
import HeaderLogo, { NavBar } from "./components/header";
import Prototypes from "./components/prototypes";

function App() {
  return (
    <>
      <HeaderLogo />
      <NavBar />
      <GrowYourBusiness />
      <Prototypes />
    </>
  );
}

export default App;
