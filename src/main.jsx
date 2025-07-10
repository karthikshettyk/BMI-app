import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import UnderweightTips from "./components/UnderweightPage";
import NormalBMITips from "./components/NormalweightPage";
import OverweightTips from "./components/OverweightPage";
import ObeseBMITips from "./components/ObeseweightPage";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route
        path="/underweighttips"
        element={<UnderweightTips></UnderweightTips>}
      />
      <Route path="/normalweighttips" element={<NormalBMITips></NormalBMITips>} />
      <Route path="/overweighttips" element={<OverweightTips></OverweightTips>} />
      <Route path="/obeseweighttips" element={<ObeseBMITips></ObeseBMITips>}/>
    </Routes>
  </Router>
);
