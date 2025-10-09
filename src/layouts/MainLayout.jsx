import { Outlet } from "react-router-dom"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

const MainLayout = () => {
  return (
    <div className="main-layout">
        <Header />
         <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout