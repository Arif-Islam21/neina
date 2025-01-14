import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./Routes/AppRoute.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </AuthProvider>
    <Toaster />
  </StrictMode>
);
