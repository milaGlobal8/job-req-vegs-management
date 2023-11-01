import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/screen";
import Home from "./pages/home/Home";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
