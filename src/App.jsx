import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-7/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
