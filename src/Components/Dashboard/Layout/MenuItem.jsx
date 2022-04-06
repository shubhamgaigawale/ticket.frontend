import React from 'react'
import { Link } from 'react-router-dom'
import LinkItem from './LinkItem'

const MenuItem = ({linkItem, path}) => {
    return (
        <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                    {linkItem}
                    <i className="right fas fa-angle-left" />
                </p>
            </a>
            <ul className="nav nav-treeview">
                <LinkItem path={path} linkName={linkItem}/>
            </ul>
        </li>
    )
}

export default MenuItem