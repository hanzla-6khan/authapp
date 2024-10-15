
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './Home';


const LandingpageLayout = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Outlet />
            <Home />


            <Footer />
        </div>
    )
}

export default LandingpageLayout