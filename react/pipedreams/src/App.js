import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Inspiration from './pages/inspiration';
import Team from './pages/team';
import Contact from './pages/contact';
import "./pages/Home.css";
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="inspiration" element={<Inspiration />} />
                <Route path="team" element={<Team />} />
                <Route path="contact" element={<Contact />} />
                <Route path='*' element={<main style={{ padding: '1rem'}}><p>Opps, we've sprung a leak. Best to go back while we fix it.</p></main>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App