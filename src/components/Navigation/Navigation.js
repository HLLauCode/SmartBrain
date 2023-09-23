import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
            <nav className="flex justify-end">
                <p onClick={() => onRouteChange('signout')} className="p-4 text-2xl hover:opacity-50 underline-offset-auto cursor-pointer underline">Sign out</p>
            </nav>
            )
        } else {
            return (
            <nav className="flex justify-end">
                <p onClick={() => onRouteChange('signin')} className="p-4 text-2xl hover:opacity-50 underline-offset-auto cursor-pointer underline">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="p-4 text-2xl hover:opacity-50 underline-offset-auto cursor-pointer underline">Register</p>
            </nav>
            )
            
        }
        
}

export default Navigation;