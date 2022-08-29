import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';
import ReportGeneration from './pages/ReportGeneration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TablePage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/report' element={<ReportGeneration />} />
      </Routes>
    </Router>
  );
}

export default App;
