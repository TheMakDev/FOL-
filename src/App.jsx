import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import FOLConvertsPage from "./pages/FOLConvertsPage";
import ContactCounsellor from "./pages/ContactCounsellor";

// new pages
import ChurchesPage from "./pages/ChurchesPage";
import MessagesPage from "./pages/MessagesPage";
import AudioPage from "./pages/AudioPage";
import OpenHeavensPage from "./pages/OpenHeavensPage";

export default function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<FOLConvertsPage />} />
        <Route path="/contact-counsellor" element={<ContactCounsellor />} />

        {/* New routes */}
        <Route path="/churches" element={<ChurchesPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/open-heavens" element={<OpenHeavensPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
