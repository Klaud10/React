import React from 'react';
import cafe from '../../assets/img/cafe.webp';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                style={{
                    backgroundImage: `url(${cafe})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'noRepeat',
                }}        
            > 
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-tittle">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    In molestie diam vitae erat scelerisque semper.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
