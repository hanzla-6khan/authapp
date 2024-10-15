
import { Auth } from './pages/Auth';
import Chats from './pages/Chats';

// import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';



import Dashboard from './AdminPannel/pages/Dashbord';
import Setting from './AdminPannel/pages/Setting';
import ContentWrapper from './AdminPannel/components/ContentWrapper';
import LandingpageLayout from './pages/landingPage';
import AboutUs from './pages/landingPage/AboutUs';
import BuyAndSell from './pages/landingPage/BuyAndSell';


function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<LandingpageLayout />}>


          <Route path="signup" element={<Auth />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="buy-sell" element={<BuyAndSell />} />
          <Route path="chats/:id" element={<Chats />} />
        </Route>

        <Route path='/chats/:id' element={<Chats />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<ContentWrapper />} />
          <Route path='settings' element={<Setting />} />


        </Route>
      </Routes>


    </>
  );
}

export default App;
