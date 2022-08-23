import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TablePage />} />
        <Route path='/form' element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
