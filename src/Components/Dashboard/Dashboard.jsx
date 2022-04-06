import React from 'react'
import Header from './Layout/Header'
import Menu from './Layout/Menu'

function Dashboard() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>10</h3>
                                        <p>Developer Tickets</p>
                                    </div>
                                    <div className="icon">
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>10<sup style={{ fontSize: 20 }}></sup></h3>
                                        <p>Support Tickets</p>
                                    </div>
                                    <div className="icon">
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>Escalations</p>
                                    </div>
                                    <div className="icon">
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Urgent Tickets</p>
                                    </div>
                                    <div className="icon">
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <section className="col-lg-7 connectedSortable">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="ion ion-clipboard mr-1" />
                                            To Do List
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <ul className="todo-list" data-widget="todo-list">
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                                                    <label htmlFor="todoCheck1" />
                                                </div>
                                                <span className="text">Design a nice theme</span>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer clearfix">
                                        <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard