import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage"

const AppRouter = () => {
  return (
    <Router>
      <PublicNavbar />
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abouts" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage/>}></Route>
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
