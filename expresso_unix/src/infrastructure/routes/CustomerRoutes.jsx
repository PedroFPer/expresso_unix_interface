import { Routes, Route, Navigate  } from 'react-router-dom'
import HomePage from '../../ui/pages/customer/home-page/HomePage'
import TravelList from '../../ui/pages/customer/travel-list/TravelList'

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="home-page" replace />} />
      
      <Route path="home-page" element={<HomePage />} /> 
      <Route path="travel-list" element={<TravelList />} /> 
    </Routes>
  )
}