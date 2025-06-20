import { Routes, Route } from "react-router";

import App from "./App";
import SignIn from "./pages/sign-in/SignIn";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<SignIn/>} />
    </Routes>
  )
}

export default Router