import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <>
            <p className="center text-xl font-medium">
                {'I can detect faces in your pictures! Give it a try!'}
            </p>
            <div className="center items-center">
                <div className="p-8 rounded-lg shadow-lg center ImageForm">
                    <input className="text-xl p-1 w-8/12 justify-center " type="text" onChange={ onInputChange }/>
                    <button className="text-lg p-1 w-4/12 bg-green-200 transition ease-in-out 
                    hover:scale-110 duration-200 rounded-sm border-2 border-black" onClick={ onButtonSubmit }>
                        Detect
                    </button>
                </div>
                
            </div>
        </>
    )
}

export default ImageLinkForm;