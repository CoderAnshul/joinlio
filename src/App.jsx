import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";
import TravelHub from "./Pages/TravelHub";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "./Components/ScrollToTop";
import GetStarted from "./Pages/GetStarted";
import Policy from "./Pages/Policy";
import ConfidentialityPolicy from "./Pages/ConfidentialityPolicy";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import { useLocation } from "react-router-dom";
import SendMessage from "./Pages/SendMessage";

const App = () => {
  const lenisRef = useRef(null);

  const ScrollManager = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
      if (!hash) {
        window.scrollTo(0, 0);
      } else {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [pathname, hash]);

    return null;
  };

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07, // Adjust scrolling smoothness
    });

    lenisRef.current = lenis;

    const onScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-wrapper min-h-screen overflow-x-hidden">
      {/* <div className="gradient-layer">
        <div className="gradient-background"></div>
        <div className="gradient-background outer"></div>
      </div> */}

      <BrowserRouter>
        <ScrollManager />
        <Navbar />
        <div className="content-container relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hubs" element={<TravelHub />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route
              path="/terms-and-condition"
              element={<ConfidentialityPolicy />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/send-message" element={<SendMessage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
