import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
function App() {
  const currPath = useLocation(); 
  return (
    <div className="bg-gray-900 w-full h-screen">
      <Header />
      <Outlet />
      {currPath.pathname !== '/chat' && (
        <Footer />
      )}
    </div>
  );
}

export default App;
