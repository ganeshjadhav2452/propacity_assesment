import React from 'react'
import '../../styles/Card.css'
const Card = ({ content }) => {
    return (
        <div className="card-container mt-4">
            <div className="card">
                <div className="first-card"><img src="https://picsum.photos/750/750
" alt='img' />
                    <h4>{content.name ? content.name : content.title}</h4>

                </div>
                <div className="back-card" />
                <div className="thid-card" />
            </div>
        </div>

    )
}

export default Card