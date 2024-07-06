import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
        <img className='text-white' src="./LogoImage.jpg" alt="Logo " style={{ width }} />
    </div>
  )
}


  
export default Logo