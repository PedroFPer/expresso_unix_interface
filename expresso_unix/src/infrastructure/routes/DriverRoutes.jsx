import { Routes, Route, Navigate } from 'react-router-dom'
import { DriverProvider } from '../context/DriverProvider'
import DriverLogin from '../../ui/pages/driver/driver-login/DriverLogin'
import DriverTrips from "../../ui/pages/driver/driver-trips/DriverTrips"

export default function DriverRoutes() {
  return (
    <DriverProvider>
      <Routes>
        <Route index element={<Navigate to="login" replace />} />

        <Route path="login" element={<DriverLogin />} />
        <Route path="trips" element={<DriverTrips />} />
      </Routes>
    </DriverProvider>
  )
}