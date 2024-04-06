import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Soldier from './components/soldier';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Soldier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
