import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Offer } from "./pages/Offer";

import { ROUTES } from "./constants";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.offer} element={<Offer />} />
      </Routes>
    </Router>
  );
};

export default App;
