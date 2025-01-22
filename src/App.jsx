import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AddClientePage from "./pages/AddClientePage";
import AddReciboPage from "./pages/AddReciboPage";
import ClienteTablePage from "./pages/ClienteTablePage";
import ReciboTablePage from "./pages/ReciboTablePage";
import UpdateClientePage from "./pages/UpdateClientePage";
import UpdateReciboPage from "./pages/UpdateReciboPage";

const App = () => {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
      <Routes>
        <Route path="/recibos" element={<ReciboTablePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recibos/add" element={<AddReciboPage />} />
        <Route path="/recibos/update/:id" element={<UpdateReciboPage />} />
        <Route path="/clients" element={<ClienteTablePage />} />
        <Route path="/clients/add" element={<AddClientePage />} />
        <Route path="/clients/update/:id" element={<UpdateClientePage />} />
      </Routes>
  );
};

export default App;
