import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";

import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Work from "../pages/Work/Work";
import Contact from "../pages/Contact/Contact";
import UIUXDesign from "../pages/UI-UX-Design";
import FullstackDevCourse from "../pages/Courses/FullstackDevCourse";
import AppDevelopment from "../pages/AppDevelopment";
import UIUXDesignCourse from "../pages/Courses/UIUXDesignCourse";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ui-ux" element={<UIUXDesign />} />
        <Route path="/full-stack" element={<FullstackDevCourse />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/uiux-course" element={<UIUXDesignCourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;