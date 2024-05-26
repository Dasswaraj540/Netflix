import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <TailSpin height="100" width="100" color="#f20001" ariaLabel="loading" />
        </div>
    )
}

export default Loading