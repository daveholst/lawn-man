// import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/apiQueries';

const Dashboard = () => {
  const { loading, error: userErrorRes, data: userDataRes } = useQuery(GET_ME);
  const userData = userDataRes?.me;

  if (userErrorRes) {
    return <h2>{userErrorRes.message}</h2>;
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (userData)
    return (
      <div className="Dashboard-Page">
        <h2>Welcome Back, {userData.firstName}</h2>
      </div>
    );
};

export default Dashboard;
