import React from 'react';
import Carousal from '../Carousal/Carousal';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard-container'>
        <Carousal />

        <div className='admin-main-section'>
            <button>
                <Link to="/admin/list-of-all-vounteers">Vounteers List</Link>
            </button>
            <button>
                <Link to="/admin/add-classroom">Add Classroom</Link>
            </button>
        </div>
    </div>
  )
}

export default AdminDashboard;