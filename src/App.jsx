import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import Donate from './views/Donate';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden hide-scrollbar">
      <Routes>
        <Route
          element={
            <BaseLayout>
              <Outlet />
            </BaseLayout>
          }
        >
          <Route path={'/'} element={<Home />} />
          <Route path={'/available-cats'} element={<AvailableCats />} />
          <Route path={'/donate'} element={<Donate />} />
          <Route path={'/about-us'} element={<AboutUs />} />
          <Route path={'/contact-us'} element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
