import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import ContactMe from '../pages/contact/Contact';
import Developers from '../pages/devTeam/DevTeam';
import References from '../pages/references/References';
import Tutorial from '../pages/tutorial/Tutorial';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/team" element={<Developers />} />
        <Route path="/references" element={<References />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
