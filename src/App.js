import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import AdminPanel from "./Components/Dashboard/AdminPanel";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Dashboard/Layout/Header";
import Menu from "./Components/Dashboard/Layout/Menu";
import AddTicket from "./Components/Dashboard/TicketComponent/AddTicket";
import TicketTable from "./Components/Dashboard/TicketComponent/TicketTable";
import AddUser from "./Components/Dashboard/UserComponents/AddUser";
import Home from "./Components/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTable from "./Components/Dashboard/UserComponents/UserTable";
import TicketDetails from "./Components/Dashboard/TicketComponent/TicketDetails";
import { useEffect, useState } from "react";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    isAuthenticated ?
      <div className="wrapper">
        <Header />
        <Menu />
        <ToastContainer />

        <Routes>
          <Route path="home" exact element={<Home />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-ticket" element={<AddTicket />} />
          <Route path="ticket-table" element={<TicketTable />} />
          <Route path="all-users" element={<UserTable />} />
          <Route path="ticket-details" element={<TicketDetails />} />
          <Route path="signin" element={<Login />} />
        </Routes>
      </div> : <div className="wrapper">

        <Navigate to="/signin" />
        <Routes>
          <Route path="signin" element={<Login />} />
        </Routes>

      </div>
  );
}

export default App;
