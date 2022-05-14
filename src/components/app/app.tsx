import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";

const Play = React.lazy(() => import("@/pages/play/play"));

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Play />} />
      </Routes>
    </React.Suspense>
  );
}
