import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { MdClear, MdDehaze, MdHome, MdLogout, MdMusicNote, MdPerson, MdPlaylistPlay, MdRadio } from 'react-icons/md'
import { IconContext } from 'react-icons'

function Navbar()  {
    const [nav, setNav] = useState(false)
    return (
        <div className="">
            <div className="flex absolute p-4">
                <IconContext.Provider value={{ color:'white' }}>
                    <MdDehaze className={nav ? 'hidden' : "block md:hidden lg:hidden" } onClick={()=>setNav(!nav)} />
                    <MdClear className={nav ? 'block' : "hidden"} onClick={()=>setNav(false)} />
                </IconContext.Provider>
                <img src="./images/Logo.png" alt="" className="m-auto lg:hidden md:hidden ml-4" />
            </div>
            <nav className={nav ? 'block absolute right-0 top-0 bg-gray-900 h-auto' : "p-4 w-20 hidden lg:block md:block"}>
                <img src="./images/Logo.png" alt="" className="m-auto hidden lg:block" />
                <ul className="border-none md:rounded-full lg:rounded-full md:bg-gray-900 lg:bg-gray-900 w-auto md:w-12 lg:w-12 p-4 pb-4 md:p-4 lg:p-4 justify-evenly text-white font-bold md:mt-4 lg:mt-4">
                    <li>
                        <Link to='/' className='flex md:block lg:block hover:text-gray-500 transition-all'>
                            <IconContext.Provider value={{ color: 'yellow' }}>
                                <MdHome className="mr-4" />
                            </IconContext.Provider>
                            <span className="md:hidden lg:hidden">Home</span>
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link to='/ms' className='flex md:block lg:block  hover:text-gray-500 transition-all'>
                            <IconContext.Provider value={{ color: 'yellow' }}>
                                <MdMusicNote className="mr-4" />
                            </IconContext.Provider>
                            <span className="md:hidden lg:hidden">My collections</span>
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link to='/radio' className='flex md:block lg:block  hover:text-gray-500 transition-all'>
                            <IconContext.Provider value={{ color: 'yellow' }}>
                                <MdRadio className="mr-4" />
                            </IconContext.Provider>
                            <span className="md:hidden lg:hidden">Radio</span>
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link to='/playlist' className='flex md:block lg:block  hover:text-gray-500 transition-all'>
                            <IconContext.Provider value={{ color: 'yellow' }}>
                                <MdPlaylistPlay className="mr-4" />
                            </IconContext.Provider>
                            <span className="md:hidden lg:hidden">Playlists</span>
                        </Link>
                    </li>
                </ul>
                <ul className="border-none md:rounded-full lg:rounded-full md:bg-gray-900 lg:bg-gray-900 w-auto md:w-12 lg:w-12 p-4 md:pt-4 lg:pt-4 pt-0 justify-evenly text-white font-bold md:mt-4 lg:mt-4">
                <li className="">
                    <Link to='/account' className='flex md:block lg:block  hover:text-gray-500 transition-all '>
                            <IconContext.Provider value={{ color: 'yellow' }}>
                                <MdPerson className="mr-4" />
                            </IconContext.Provider>
                            <span className="md:hidden lg:hidden">Profile</span>
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link to='/logout' className='flex md:block lg:block  hover:text-gray-500 transition-all'>
                            <IconContext.Provider value={{ color: 'yellow' }}>
                                <MdLogout className="mr-4" />
                            </IconContext.Provider>
                            <span className="md:hidden lg:hidden">Log out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar