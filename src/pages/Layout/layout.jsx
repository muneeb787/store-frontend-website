import Header from '../../components/Header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
