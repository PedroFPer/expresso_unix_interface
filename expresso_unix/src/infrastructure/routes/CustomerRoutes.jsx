  import { Routes, Route, Navigate  } from 'react-router-dom'
  import TravelSummary from '../../ui/pages/customer/travel-summary/TravelSummary'
  import PassengerRegistration from '../../ui/pages/customer/passenger-registration/PassengerRegistration'
  import PaymentSummary from '../../ui/pages/customer/payment-summary/PaymentSummary'
  import { CustomerProvider  } from '../context/CustomerContext'

  export default function CustomerRoutes() {
    return (
      <CustomerProvider>
        <Routes>
          <Route index element={<Navigate to="travel-summary" replace />} />

          <Route path="travel-summary" element={<TravelSummary />} />
          <Route path="passenger-registration" element={<PassengerRegistration />} />
          <Route path="payment-summary" element={<PaymentSummary />} />
        </Routes>
      </CustomerProvider>
    )
  }