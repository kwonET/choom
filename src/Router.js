import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Intro from "./pages/Intro";
import Intro2 from "./pages/Intro2";
import Intro3 from "./pages/Intro3";
import Intro4 from "./pages/Intro4";
import Show from "./pages/Show";
import Loading from "./pages/Loading";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/intro3" element={<Intro3 />} />
        <Route path="/intro4" element={<Intro4 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}
