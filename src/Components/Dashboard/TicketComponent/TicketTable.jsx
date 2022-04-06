import React from 'react'
import { useEffect } from 'react';
import TicketRow from './TicketRow';
import TicketService from '../Services/TicketService';

function TicketTable() {

    const {data, handleDelete, fetchData} = TicketService();

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="content-wrapper">
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Tickets</h3>
                            </div>
                            <div className="card-body p-0">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Ticket Name</th>
                                            <th>Ticket Type</th>
                                            <th>Priority</th>
                                            <th>Status</th>
                                            <th>Assignee</th>
                                            <th>Application Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        data ? data.map((item) => (
                                                <TicketRow item={item} handleDelete={handleDelete}/>
                                         )) : 'No Record Found'
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TicketTable