import React from "react";
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
      <NavBar />
        <div id="banner">
        <h1 id='name1'>Pipe</h1>
    <h1 id='name2'>Dreams</h1>
    <div id='testimonials'></div>
    <button id='cta1' type='button' onclick='window.location.href="../pages/contact.html";'>Get in touch for your PipeDreams bathroom </button>
        </div>
      </main>
    </>
  );
}

export default Home;