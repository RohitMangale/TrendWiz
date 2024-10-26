
import './App.css'
import Dash from './Dashboard/Dash'
import Dashboard from './Dashboard/Dashboard'
import Home from './Home/Home'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import NotFound from './NotFound';
import GenAIForm from './geni/GenAIForm';
import HomeNavbar from './components/HomeNavbar/HomeNavbar';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <BrowserRouter>
    <HomeNavbar/>
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/customer" element={<GenAIForm/>} />
          {/* <Route component={NotFound} /> Fallback route */}
        </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
