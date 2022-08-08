import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />;
    </div>
  );
};
