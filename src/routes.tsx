import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

const MappedRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </Router>
  );
};

export default MappedRoutes;
