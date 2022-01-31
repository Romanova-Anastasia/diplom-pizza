import React from 'react'
import pizza from '../../assets/img/loading.gif'
import './loading.scss'

const Loading = () => {
    return (
        <div className="loading">
            <img src={pizza} alt="loading"/>
        </div>
    )
}

export default Loading