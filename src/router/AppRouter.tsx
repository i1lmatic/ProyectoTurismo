import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import ActivityDetailPage from '../pages/public/ActivityDetailPage';
import ReviewPage from '../components/features/tourist/ReviewPage/ReviewPage'; // Importa la nueva página

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/activity/:id" element={<ActivityDetailPage />} />
      <Route path="/activity/:id/review" element={<ReviewPage />} /> {/* Nueva ruta */}
    </Routes>
  );
};