import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import ActivityDetailPage from '../pages/public/ActivityDetailPage';
import RegisterPage from '../pages/public/RegisterPage';
import ReviewPage from '../components/features/tourist/ReviewPage/ReviewPage';
import ConvertToOperatorPage from '../pages/public/ConvertToOperatorPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/activity/:id" element={<ActivityDetailPage />} />
      <Route path="/activity/:id/review" element={<ReviewPage />} />
      <Route path="/convert-to-operator" element={<ConvertToOperatorPage user={JSON.parse(localStorage.getItem('user') || '{}')} />} />
    </Routes>
  );
};