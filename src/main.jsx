import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";   // 👈 THIS IS MUST
import { motion, Motion } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  motion
);