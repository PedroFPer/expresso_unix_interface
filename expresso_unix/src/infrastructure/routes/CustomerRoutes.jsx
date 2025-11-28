  import { Routes, Route, Navigate  } from 'react-router-dom'
  import TravelSummary from '../../ui/pages/customer/travel-summary/TravelSummary'
  import PassengerRegistration from '../../ui/pages/customer/passenger-registration/PassengerRegistration'
  import PaymentSummary from '../../ui/pages/customer/payment-summary/PaymentSummary'
  import BoletoPaymentDetails from '../../ui/pages/customer/boleto-payment-details/BoletoPaymentDetails'
  import PixPaymentDetails from '../../ui/pages/customer/pix-payment-details/PixPaymentDetails'
  import { CustomerProvider  } from '../context/CustomerProvider'

  export default function CustomerRoutes() {
    return (
      <CustomerProvider>
        <Routes>
          <Route index element={<Navigate to="travel-summary" replace />} />

          <Route path="travel-summary" element={<TravelSummary />} />
          <Route path="passenger-registration" element={<PassengerRegistration />} />
          <Route path="payment-summary" element={<PaymentSummary />} />
          <Route path="boleto-payment-details" element={<BoletoPaymentDetails />} />
          <Route path="pix-payment-details" element={<PixPaymentDetails />} />
        </Routes>
      </CustomerProvider>
    )
  }