import React from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
function Button({label, onClick, to}) {
        return <button onClick={onClick} 
        type="button" className=" mt-7 w-96
         ml-8 text-white bg-gray-800 hover:bg-gray-900
         focus:outline-none focus:ring-4 focus:ring-gray-300
          font-medium rounded-lg text-sm py-2.5 me-2 mb-2">{label}</button>
    }

export default Button