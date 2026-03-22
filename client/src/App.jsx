import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConnectionTest from "./components/common/ConnectionTest";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <h1>My App</h1>

        {/* Optional: keep this for testing */}
        <ConnectionTest />

        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;