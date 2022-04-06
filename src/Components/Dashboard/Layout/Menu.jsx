import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">Ticketing System</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="info">
                            <a href="#" className="d-block">Admin</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <MenuItem linkItem="Dashboard" path="dashboard"/>
                            <li className="nav-item has-treeview">
                                <Link to="" className="nav-link">
                                    <i className="nav-icon fas fa-user" />
                                    <p>
                                        User
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="add-user" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add User</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="all-users" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Users</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="" className="nav-link">
                                    
                                    <i className="nav-icon fas fa-chart-pie" />
                                    <p>
                                        Ticket
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="ticket-table" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>All Tickets</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/add-ticket" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Create Ticket</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="" className="nav-link">
                                    <i className="nav-icon fas fa-users" />
                                    <p>
                                        Department
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/all-department" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Departments</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/add-department" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Department</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Menu