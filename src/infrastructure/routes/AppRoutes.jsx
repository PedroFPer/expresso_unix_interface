import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../../App.jsx'
import AdminRoutes from './AdminRoutes.jsx'
import CustomerRoutes from './CustomerRoutes.jsx'
import DriverRoutes from './DriverRoutes.jsx'


export default function AppRoutes(){
  return(
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path= "/admin/*" element = {<AdminRoutes />} />
        <Route path ="/customer/*" element = {<CustomerRoutes />} />
        <Route path ="/driver/*" element = {<DriverRoutes />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}