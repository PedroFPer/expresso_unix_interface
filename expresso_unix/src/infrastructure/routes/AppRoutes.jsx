import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../../App.jsx'
import AdministratorRoutes from './AdministratorRoutes.jsx'
import CustomerRoutes from './CustomerRoutes.jsx'
import DriverRoutes from './DriverRoutes.jsx'
import TripManagerRoutes from './TripManagerRoutes.jsx'


export default function AppRoutes(){
  return(
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path= "/admin/*" element = {<AdministratorRoutes />} />
        <Route path ="/customer/*" element = {<CustomerRoutes />} />
        <Route path ="/driver/*" element = {<DriverRoutes />} />
        <Route path ="/trip-manager/*" element = {<TripManagerRoutes />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}