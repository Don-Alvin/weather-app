import Image from 'next/image'
import React from 'react'
import spinner from '../public/Spinner-1.4s-200px.gif'

const Spinner = () => {
  return (
    <div>
        <Image 
            alt='loading...'
            src={spinner}
            className='w[200px] m-auto'
        />
    </div>
  )
}

export default Spinner