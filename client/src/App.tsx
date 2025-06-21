import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Classroom from "./pages/Classroom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Classroom />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
