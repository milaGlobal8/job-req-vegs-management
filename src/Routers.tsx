import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
