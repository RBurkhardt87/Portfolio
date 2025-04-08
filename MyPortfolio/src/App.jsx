import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './Styling/PageLayout.css';
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BreastFeedingApp from "./Pages/BreastFeedingApp";
import MediaWrangler from "./Pages/MediaWrangler";
import ProjectList from "./Pages/ProjectList";
import Resume from "./Pages/Resume";
import WishList from "./Pages/WishList";


function MainLayout() {

  return (
    <div className="main-background">
      <div className="overlay">
        <div className="wrapper">  
          <Navbar />
          <Header />
          
          <main className="content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/media-wrangler" element={<MediaWrangler />} />
              <Route path="/breastfeeding-app" element={<BreastFeedingApp />} />
              <Route path="/wish-list" element={<WishList />} />
            </Routes>
          </main>         

          <Footer />  
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;