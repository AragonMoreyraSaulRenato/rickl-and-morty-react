import React from 'react'
import {Link} from 'react-router-dom'
import './CustomLink.css'

interface CustomLinkProps {
    to: string,
    name: string,
}


function CustomLink( props : CustomLinkProps ) {
    return (
        <div className="item">
            <Link className="CustomLink" to={props.to}>
                {props.name}
            </Link>
        </div>
    )
}

export default CustomLink
