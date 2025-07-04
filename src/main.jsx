import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import Router from "./Router";

import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import GlobalContext from '@/contexts/global-context'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalContext>
        <ToastContainer />
        <Router />
      </GlobalContext>
    </StrictMode>
  </BrowserRouter>
);
