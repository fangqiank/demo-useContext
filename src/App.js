import React from "react";
import FunctionContextComp from "./FunctionContextComp";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContextComp />
    </ThemeProvider>
  );
}
