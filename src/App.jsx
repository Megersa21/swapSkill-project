import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import MySkills from "./pages/MySkills";
import MySwaps from "./pages/mySwaps";
import Discover from "./pages/Discover";
import SkillDetails from "./pages/SkillDetails";
import AddSkill from "./pages/addSkill";
import Messages from "./pages/message";
import VideoCall from "./pages/videoCall";
import SavedSkills from "./pages/savedSkills";
import Settings from "./pages/setting";

const HIDE_NAVBAR_ROUTES = new Set(["/dashboard"]);

function AppShell() {
  const location = useLocation();
  const shouldShowNavbar = !HIDE_NAVBAR_ROUTES.has(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-skills" element={<MySkills />} />
        <Route path="/my-swaps" element={<MySwaps />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/skills/:id" element={<SkillDetails />} />
        <Route path="/skills/add" element={<AddSkill />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<Home />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/saved-skills" element={<SavedSkills />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
