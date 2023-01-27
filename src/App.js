import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthWrapper, Dashboard, Error, Login, PrivateRoute } from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
