import React, { useState } from 'react'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // menu link array
    const menuLinks = [
        { name: 'HOME', href: '#' },
        { name: 'COURSES', hre: '#courses' },
        { namr: 'OUR TEACHERS', hre: '#our teachers' },
        { name: 'BLOG', href: '#blog' },
        { name: 'CONTACT', href: '#contact' },
    ]
  return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 py-3 flex items-center justify-around'>
                {/* logo */}
                <div> <img src="Images/logo.png" alt="" /></div>

                    {/* Desktop menu */}

                <div className="hidden md:flex space-x-8 items-center text-2x1">
                <div className="hidden md:flex space-x-8 text-2x1 font-bold">
                {menuLinks.map((link, index) => {
                    <a 
                    key={index}
                    href={link.href}>
                    {link.name}
                    className="text-dark-blue-700 hove:text-blue-600"
                    </a>
                })}
                </div>

                 {/* logo2 */}
                <div> <img src="Images/all-icon/support.png" alt="" />
                <p>need help? call free</p>
                <h2>321 325 567</h2>
                </div>

                <a href="#" className='text-center m-auto border-solid border-2 border-black-500 bg-yellow-500 font-bold px-6 py-4 text-3 w-fit hover:bg-blue-950 hover:text-yellow-500' >Apply</a>    
                </div>
            </div>
        </nav>
  )
}

export default Nav