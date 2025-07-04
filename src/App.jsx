import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import ContactThankyou from "./Pages/ContactThankyou";
import GetStartedThankyou from "./Pages/GetStartedThankyou";
import SendMessage from "./Pages/SendMessage";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import Profile from "./Components/Dashboard/profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import Feed from "./Components/Dashboard/Feeds";
import ExploreTopicsPage from "./Components/Dashboard/ExploreTopicsPage";
import { PeerAccountPage } from "./Components/Dashboard/PeerAccount";
import { Tools } from "./Components/Dashboard/Tools";
import { ProjectsPage } from "./Components/Dashboard/Collaboration";
import { ServicesPage } from "./Components/Dashboard/Service";
import Rewards from "./Components/Dashboard/Rewards";
import RequestPartnership from "./Components/Dashboard/RequestPartnership";
import PlanManagement from "./Components/Dashboard/planManagement";
import StudentManagement from "./Components/Dashboard/student";
import SignIn from "./Pages/SignIn";
import VerifyOtpPopup from "./Components/VerifyOtpPopup";
import SubHubPage from "./Pages/SubHubDetailpage";
import Glimpse from "./Pages/Glimpse";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HubBlogDetailPage from "./Pages/SubhubBlogDetail";

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

  const MainLayout = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');
    
    return (
      <>
        {!isDashboard && <Navbar />}
        <div className="content-container relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hubs" element={<TravelHub />} />
            <Route path="/hubs/:hubName" element={<TravelHub />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="/terms-and-condition" element={<ConfidentialityPolicy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/blog-detail/:titleSlug" element={<BlogDetail />} />
            <Route path="/hub-blog-detail/:slug" element={<HubBlogDetailPage />} />
            <Route path="/send-message" element={<SendMessage />} />
            <Route path="/thank-you" element={<ContactThankyou />} />
            <Route path="/glimpse" element={<Glimpse />} />
            <Route path="/get-started-thank-you" element={<GetStartedThankyou />} />
            <Route path="/sign-in" element={<SignIn/>} />  
            <Route path="/verify-otp" element={<VerifyOtpPopup/>} /> 
            <Route path="/subhub/:subHubId" element={<SubHubPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="feed" element={<Feed />} />
              <Route path="topics" element={<ExploreTopicsPage />} />
              <Route path="account" element={<PeerAccountPage />} />
              <Route path="tools" element={<Tools />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="rewards" element={<Rewards />} />
              <Route path="request-partnership" element={<RequestPartnership />} />
              <Route path="plan" element={<PlanManagement />} />
              <Route path="students" element={<StudentManagement/>} />
            </Route>
          </Routes>
        </div>
        {!isDashboard && <Footer />}
      </>
    );
  };

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07,
    });

    lenisRef.current = lenis;

    const onScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-wrapper min-h-screen overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <ScrollManager />
        <MainLayout />
      </BrowserRouter>
    </div>
  );
};

export default App;