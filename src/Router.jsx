import { Routes, Route } from "react-router";

import App from "./App";
import Login from "./pages/onboarding/component/LoginPage/LoginPage";
import SignUp from "./pages/onboarding/component/SignUp/SignUp";
import Logged from "./pages/onboarding/component/Logged/Logged";
import Busness from "./pages/onboarding/component/business/business";
import Facilities from "./pages/onboarding/component/Facilities/facilities";
import Energy from "./pages/onboarding/component/Energy/Energy";
import Transportation from "./pages/onboarding/component/Tranportation/Tranportation";
import Pricing from "./pages/pricing/Pricing";

function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<App />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logged" element={<Logged />} />
      <Route path="/busness" element={<Busness />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/energy" element={<Energy />} />
      <Route path="/transportation" element={<Transportation />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default Router;
