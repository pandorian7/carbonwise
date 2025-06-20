import { Routes, Route } from "react-router";

import App from "./App";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<h1>Login</h1>} />
    </Routes>
  )
}

export default Router