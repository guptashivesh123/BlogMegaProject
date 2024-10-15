import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
        <img className='text-white rounded-full' 
        src="./LogoImage.jpg"
        alt="logo" 
        style={{ width:50 }} />
    </div>
  )
}


export default Logo