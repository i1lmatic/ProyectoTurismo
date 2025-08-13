import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import ActivityDetail from '../components/features/tourist/ActivityDetail/ActivityDetail';
import { featuredActivitiesData } from '../components/layout/FeaturedActivities/FeaturedActivities';
import { useParams } from 'react-router-dom';

export const AppRouter = () => {
  const { id } = useParams<{ id: string }>();
  const activity = featuredActivitiesData.find((activity) => activity.id === id);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/activity/:id" element={activity ? <ActivityDetail activity={activity} /> : <div>Actividad no encontrada</div>} />
    </Routes>
  );
};
