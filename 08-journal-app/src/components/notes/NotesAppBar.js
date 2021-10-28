import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span> 28 de oct 2021 </span>

            <div>
                <button className="btn btn-primary">
                    Picture
                </button>
                
                <button className="btn btn-primary">
                    Save
                </button>
            </div>
        </div>
    )
}
