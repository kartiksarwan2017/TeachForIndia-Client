import React from 'react';
import Carousal from '../Carousal/Carousal';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard'>
        <Carousal />

        <div className='admin-main-section'>
            <button>
                <Link to="/list-of-all-vounteers">Vounteers List</Link>
            </button>
        </div>
    </div>
  )
}

export default AdminDashboard;