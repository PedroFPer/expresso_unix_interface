import { Routes, Route, Navigate } from 'react-router-dom'
import { DriverProvider } from '../context/DriverProvider'
import DriverLogin from '../../ui/pages/driver/driver-login/DriverLogin'
import DriverTrips from "../../ui/pages/driver/driver-trips/DriverTrips"
import DriverTripsResume from '../../ui/pages/driver/drive-trips-resume/DriverTripsResume'
import DriverTripManifest from "../../ui/pages/driver/driver-trip-manifest/DriverTripManifest"
import DriverTripChat from "../../ui/pages/driver/driver-trip-chat/DriverTripChat"

export default function DriverRoutes() {
  return (
    <DriverProvider>
      <Routes>
        <Route index element={<Navigate to="login" replace />} />

        <Route path="login" element={<DriverLogin />} />
        <Route path="trips" element={<DriverTrips />} />
        <Route path="trips/trips-resume/:id" element={<DriverTripsResume />} />
        <Route path="trips/trips-resume/:id/trip-manifest" element={<DriverTripManifest />} />
        <Route path="trips/trips-resume/:id/trip-chat" element={<DriverTripChat />} />
      </Routes>
    </DriverProvider>
  )
}