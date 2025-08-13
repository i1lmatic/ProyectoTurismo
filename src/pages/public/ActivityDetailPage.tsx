import {  Footer } from '../../components/layout';
import ActivityDetail from '../../components/features/tourist/ActivityDetail/ActivityDetail';
import { featuredActivitiesData } from '../../components/layout/FeaturedActivities/FeaturedActivities';
import { useParams } from 'react-router-dom';

const ActivityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const activity = featuredActivitiesData.find((a) => a.id === id);

  if (!activity) {
    return <div>Actividad no encontrada</div>;
  }

  return (
    <div>
      
      <ActivityDetail activity={activity} />
      <Footer 
        companyName="KANDAMO"
        year={2025}
      />
    </div>
  );
};

export default ActivityDetailPage;