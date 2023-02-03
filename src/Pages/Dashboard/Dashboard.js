import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-primary font-bold text-3xl">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-48 bg-base-100 text-base-content">
          {/* <!--Sidebar content here--> */}
          <li>
            <Link to="/Dashboard">MyAppointment</Link>
          </li>
          <li>
            <Link to="/Dashboard/MyReview">MyReview</Link>
          </li>
          <li>
            <Link to="/Dashboard/MyHistory">MyHistory</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/Dashboard/users">All users</Link>
              </li>
              <li>
                <Link to="/Dashboard/addDoctors">AddDoctors</Link>
              </li>
              <li>
                <Link to="/Dashboard/ManageDoctors">Mangage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
