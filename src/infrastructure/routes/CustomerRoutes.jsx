import { Routes, Route, Navigate } from "react-router-dom";
import CustomerTravelSummary from "../../ui/pages/customer/customer-travel-summary/CustomerTravelSummary";
import CustomerPassengerRegistration from "../../ui/pages/customer/customer-passenger-registration/CustomerPassengerRegistration";
import CustomerPaymentSummary from "../../ui/pages/customer/customer-payment-summary/CustomerPaymentSummary";
import CustomerBoletoPaymentDetails from "../../ui/pages/customer/customer-boleto-payment-details/CustomerBoletoPaymentDetails";
import CustomerPixPaymentDetails from "../../ui/pages/customer/customer-pix-payment-details/CustomerPixPaymentDetails";
import { CustomerProvider } from "../context/CustomerProvider";

export default function CustomerRoutes() {
  return (
    <CustomerProvider>
      <Routes>
        <Route index element={<Navigate to="travel-summary/:id" replace />} />
        <Route path="travel-summary/:id" element={<CustomerTravelSummary />} />
        <Route path=":id/passenger-registration" element={<CustomerPassengerRegistration />} />
        <Route path=":id/payment-summary" element={<CustomerPaymentSummary />} />
        <Route path=":id/boleto-payment-details" element={<CustomerBoletoPaymentDetails />} />
        <Route path=":id/pix-payment-details" element={<CustomerPixPaymentDetails />} />
      </Routes>
    </CustomerProvider>
  );
}
