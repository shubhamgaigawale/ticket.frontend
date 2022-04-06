import React from 'react'

function UserTable() {
  return (
    <div className="content-wrapper">
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Users</h3>
                            </div>
                            <div className="card-body p-0">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                        
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

export default UserTable