import { ROUTES } from "@/src/contexts/routes";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={ROUTES.feature.userProfile._}>Update your User Profile</Link>
    </div>
  );
};

export default Dashboard;
