import { Routes, Route, Navigate  } from 'react-router-dom'
import CustomerHomePage from '../../ui/pages/customer/home-page/CustomerHomePage'

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      
      <Route path="home" element={<CustomerHomePage />} /> 
    </Routes>
  )
}