import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css'
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import EmailHome from "./pages/Email"
import Storage from "./pages/Storage"

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/mail" element={<EmailHome/>}/>
          <Route path="/storage" element={<Storage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
