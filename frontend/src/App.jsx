import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import EmailHome from "./pages/Email";
import { AuthContext } from "./context/Authprovider";
import { useContext } from "react";
import Team from "./pages/Team";
import Docs from "./pages/Docs";
import Forum from "./pages/Forum";
import Service from "./pages/Service";
import Authenticator from "./pages/Authenticator";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        {!user ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/service" element={<Service />} />
            <Route path="/authenticator" element={<Authenticator />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mail" element={<EmailHome />} />
          </Routes>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
