import { Routes, Route, Navigate  } from 'react-router-dom'
import TravelResults from '../../ui/pages/customer/travel-results/TravelResults'
import ResumeTravel from '../../ui/pages/customer/resume-travel/ResumeTravel'
<<<<<<< Updated upstream
import TravelerInformation from '../../ui/pages/customer/traveler-information/TravelerInformation'
=======
import TravelerInfo from '../../ui/pages/customer/traveler-information/TravelerInfo'
import PaymentInformation from '../../ui/pages/customer/payment-information/PaymentInformation'
import PassengerRegistration from "../../ui/pages/customer/passenger-registration/PassengerRegistration"
>>>>>>> Stashed changes

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="resume-travel" replace />} />

      <Route path="travel-results" element={<TravelResults />} /> 
      <Route path="resume-travel" element={<ResumeTravel />} /> 
<<<<<<< Updated upstream
      <Route path="traveler-information" element={<TravelerInformation />} /> 
=======
      <Route path="traveler-info" element={<TravelerInfo />} /> 
      <Route path="payment-information" element={<PaymentInformation />} /> 
      <Route path="passenger-registration" element={<PassengerRegistration />} /> 
>>>>>>> Stashed changes
    </Routes>
  )
}