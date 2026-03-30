import React from 'react'
import {FaExclamationTriangle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const ErrorPage = ({message}) => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6">
            <FaExclamationTriangle className='text-8xl text-rose-700 mb-4'/>
            <h1 className='text-3xl font-bold mb-2 text-gray-800'>{message ? message : "An Unexpected Error has Occurred!"}</h1>

            <button onClick={() => navigate("/")} className='mt-3 px-4 py-2 bg-linear-[#9333ea,#3b82f6] font-semibold text-white rounded-md cursor-pointer'>
                Home
            </button>
        </div>
    )
}
export default ErrorPage
