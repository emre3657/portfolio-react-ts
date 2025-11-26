import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ApiStatusProvider } from "./context/ApiStatusContext";
import "./App.css";

function App() {
  return (
    <ApiStatusProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ApiStatusProvider>
  );
}

export default App;
