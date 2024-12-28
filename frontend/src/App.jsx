import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import EmailHome from "./pages/Email";
import Storage from "./pages/Storage";
import { AuthContext } from "./context/Authprovider";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        {!user ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mail" element={<EmailHome />} />
            <Route path="/storage" element={<Storage />} />
          </Routes>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
