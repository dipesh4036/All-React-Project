import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex h-16 p-10 justify-between items-center w-full'>
    <img className='h-24 w-24' src="https://imgs.search.brave.com/Xn9FVIGisdgzIWERyC_v9JvVdmt7tx87ogEF8qJ4zpQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM2LzA0LzQy/LzM2MF9GXzMzNjA0/NDIzNl9EdFMxZDh3/RWxXTFpxaDVGc05Z/eEtORlVpeU5FUFRZ/VC5qcGc" alt="" />
    <ul className='flex space-x-10'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
    </ul>
    </div>
    </>
  )
}

export default Navbar