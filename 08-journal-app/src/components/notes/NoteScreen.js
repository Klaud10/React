import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome tittle"
                    className="notes__tittle-input"

                />

                <textarea
                    placeholder="What happened today?..."
                    className="notes__text-area"
                ></textarea>

                <div>
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt=""
                    />
                </div>
            </div>

        </div>
    )
}
