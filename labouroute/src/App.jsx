import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the child routes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
