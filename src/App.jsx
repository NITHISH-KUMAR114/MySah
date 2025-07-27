import './App.css';
import Header from './components/Header.jsx';

import Home from './page/Home/Home.jsx';
import Services from './page/Services.jsx';   // adjust filename

// router goodies
import {Routes, Route} from 'react-router-dom';
import ContactPage from "@/page/Home/Contact.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </>
    );
}
