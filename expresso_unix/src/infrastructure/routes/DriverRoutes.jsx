import { Routes, Route, Navigate } from 'react-router-dom'
import { DriverProvider } from '../context/DriverProvider'
import DriverLogin from '../../ui/pages/driver/driver-login/DriverLogin'
import DriverTrips from "../../ui/pages/driver/driver-trips/DriverTrips"
import DriveTripsResume from '../../ui/pages/driver/drive-trips-resume/DriveTripsResume'

export default function DriverRoutes() {
  return (
    <DriverProvider>
      <Routes>
        <Route index element={<Navigate to="login" replace />} />

        <Route path="login" element={<DriverLogin />} />
        <Route path="trips" element={<DriverTrips />} />
        <Route path="trips/trips-resume/:id" element={<DriveTripsResume />} />
      </Routes>
    </DriverProvider>
  )
}