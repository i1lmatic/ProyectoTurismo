import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />

       
      </Routes>
    </Router>
  );
};
