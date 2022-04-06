import React from 'react'

export default function UserRow() {
    return (
        <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td><div class="btn-group">
                <button type="button" class="btn btn-default">Action</button>
                <button type="button" class="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu" role="menu">
                    <a class="dropdown-item" href="#">Edit</a>
                    <button onClick={() => { handleDelete(item.id) }} class="dropdown-item">Delete</button>
                </div>
            </div></td>
        </tr>)
}
