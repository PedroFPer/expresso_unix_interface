import { Routes, Route, Navigate  } from 'react-router-dom'
import TravelResults from '../../ui/pages/customer/travel-results/TravelResults'
import ResumeTravel from '../../ui/pages/customer/resume-travel/ResumeTravel'
import TravelerInformation from '../../ui/pages/customer/traveler-information/TravelerInformation'
import PaymentInformation from '../../ui/pages/customer/payment-information/PaymentInformation'

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="resume-travel" replace />} />

      <Route path="travel-results" element={<TravelResults />} /> 
      <Route path="resume-travel" element={<ResumeTravel />} /> 
      <Route path="traveler-information" element={<TravelerInformation />} /> 
      <Route path="payment-information" element={<PaymentInformation />} /> 
    </Routes>
  )
}