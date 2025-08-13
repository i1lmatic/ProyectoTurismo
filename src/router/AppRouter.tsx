import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
