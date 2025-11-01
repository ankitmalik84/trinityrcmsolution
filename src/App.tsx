import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import RevenueCycleManagementPage from "./pages/services/RevenueCycleManagementPage";
import MedicalCodingBillingPage from "./pages/services/MedicalCodingBillingPage";
import InsuranceVerificationPage from "./pages/services/InsuranceVerificationPage";
import PriorAuthorizationPage from "./pages/services/PriorAuthorizationPage";
import ARManagementPage from "./pages/services/ARManagementPage";
import DenialManagementPage from "./pages/services/DenialManagementPage";
import PaymentPostingPage from "./pages/services/PaymentPostingPage";
import ProviderCredentialingPage from "./pages/services/ProviderCredentialingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route
            path="/services/revenueCycleManagement"
            element={<RevenueCycleManagementPage />}
          />
          <Route
            path="/services/medicalCodingBilling"
            element={<MedicalCodingBillingPage />}
          />
          <Route
            path="/services/insuranceVerification"
            element={<InsuranceVerificationPage />}
          />
          <Route
            path="/services/priorAuthorization"
            element={<PriorAuthorizationPage />}
          />
          <Route path="/services/arManagement" element={<ARManagementPage />} />
          <Route
            path="/services/denialManagement"
            element={<DenialManagementPage />}
          />
          <Route
            path="/services/paymentPosting"
            element={<PaymentPostingPage />}
          />
          <Route
            path="/services/providerCredentialing"
            element={<ProviderCredentialingPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
