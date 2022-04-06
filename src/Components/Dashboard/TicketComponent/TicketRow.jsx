import React from 'react'

function TicketRow({ item, handleDelete }) {
    return (
            <tr>
                <td>{item.developerTicket}</td>
                <td>{item.ticketName}</td>
                <td>{item.ticketType}</td>
                <td>{item.priority}</td>
                <td>{item.status}</td>
                <td>{item.assignedTo?.email}</td>
                <td>{item.applicationName}</td>
                <td><div class="btn-group">
                    <button type="button" class="btn btn-default">Action</button>
                    <button type="button" class="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu" role="menu">
                        <a class="dropdown-item" href="#">Edit</a>
                        <button onClick={() => { handleDelete(item.id) }} class="dropdown-item">Delete</button>
                        <a class="dropdown-item" href="#">{item.assignedTo == null ? 'Assign' : 'Reassign'}</a>
                    </div>
                </div></td>
            </tr>
    )
}

export default TicketRow