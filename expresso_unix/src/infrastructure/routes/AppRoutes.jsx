import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../../App.jsx'
import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
import HomePageCustomer from '../../ui/pages/customer/home-page/HomePageCustomer.jsx'
import DriverLogin from '../../ui/pages/driver/driver-login/DriverLogin.jsx'
import TripManagerLogin from '../../ui/pages/trip-manager/trip-manager-login/TripManagerLogin.jsx'


export default function AppRoutes(){
  return(
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path= "/administrator/*" element = {<AdministratorLogin />} />
        <Route path ="/customer/*" element = {<HomePageCustomer />} />
        <Route path ="/driver/*" element = {<DriverLogin />} />
        <Route path ="/trip-manager/*" element = {<TripManagerLogin />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}