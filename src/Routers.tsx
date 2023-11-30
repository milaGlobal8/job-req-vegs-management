import { Header } from "components/block";
import { Home, NotFound } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
