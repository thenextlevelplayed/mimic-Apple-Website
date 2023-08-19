import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Sign_in from "./pages/Sign_in";
import NoPage from "./pages/NoPage";
import Sign_up from "./pages/sign_up";
import Member_info from "./pages/Member_info"
import Bag from "./pages/bag"
import Sign_out from "./pages/sign_out"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Sign-in" element={<Sign_in />} />
          <Route path="/Sign-up" element={<Sign_up />} />
          <Route path="/Member-info" element={<Member_info />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Sign-out" element={<Sign_out />} />
          <Route path="" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);