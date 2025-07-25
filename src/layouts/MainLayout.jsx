import { Outlet } from "react-router-dom";
import Navbar from "../ui/Menus/Navbar";
import Footer from "../ui/Menus/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
