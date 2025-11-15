import { Routes, Route, Navigate  } from 'react-router-dom'
import TravelResults from '../../ui/pages/customer/travel-results/TravelResults'

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="travel-results" replace />} />
      
      <Route path="travel-results" element={<TravelResults />} /> 
    </Routes>
  )
}