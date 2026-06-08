import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Offer } from "./pages/Offer";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Publish } from "./pages/Publish";

import { ROUTES } from "./constants";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.offer} element={<Offer />} />
        <Route path={ROUTES.signup} element={<Signup />} />
        <Route path={ROUTES.signin} element={<Signin />} />
        <Route path={ROUTES.publish} element={<Publish />} />
      </Routes>
    </Router>
  );
};

export default App;
