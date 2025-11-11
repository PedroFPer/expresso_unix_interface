import { Routes, Route, Navigate  } from 'react-router-dom'
import DriverLogin from '../../ui/pages/driver/driver-login/DriverLogin'

export default function DriverRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="login" replace />} />
      
      <Route path="login" element={<DriverLogin />} /> 
    </Routes>
  )
}