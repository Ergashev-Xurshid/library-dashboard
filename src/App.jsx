import { Outlet } from "react-router-dom";
import NavbarSite from "./components/NavbarSite";

function App() {
  return (
    <>
      <NavbarSite />
      <Outlet/>
    </>
  );
}

export default App;
