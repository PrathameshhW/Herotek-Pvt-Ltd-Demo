import { Toaster } from "react-hot-toast";
import "react-international-phone/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
