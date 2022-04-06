import React from 'react'
import { Link } from 'react-router-dom'

function LinkItem({linkName, path}) {
  return (
    <li className="nav-item">
    <Link to={path} className="nav-link">
        <i className="far fa-circle nav-icon" />
        <p>{linkName}</p>
    </Link>
</li>
  )
}

export default LinkItem