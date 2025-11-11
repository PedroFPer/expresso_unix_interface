import { Routes, Route, Navigate } from 'react-router-dom'
import TripManagerLogin from '../../ui/pages/trip-manager/trip-manager-login/TripManagerLogin'

export default function TripManagerRoutes() {
  return (
    <Routes>
       <Route index element={<Navigate to="login" replace />} />

      <Route path="login" element={<TripManagerLogin />} /> 
    </Routes>
  )
}