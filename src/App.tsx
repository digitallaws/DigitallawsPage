import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import PqrsPage from "./pages/PqrsPage";
import SecurityPage from "./pages/SecurityPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";
import { services } from "./seo/services";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {services.map((service) => (
          <Route
            key={service.path}
            path={service.path}
            element={<ServicePage service={service} />}
          />
        ))}
        <Route index element={<HomePage />} />
        <Route path="productos" element={<ProductsPage />} />
        <Route path="pqrs" element={<PqrsPage />} />
        <Route path="seguridad" element={<SecurityPage />} />
        <Route path="privacidad" element={<PrivacyPage />} />
        <Route path="terminos" element={<TermsPage />} />
        <Route path="cookies" element={<CookiesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
