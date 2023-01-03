import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaBackward, FaForward, FaPauseCircle, FaPlayCircle, FaRandom, FaVolumeUp } from 'react-icons/fa'
import { MdRepeatOne } from 'react-icons/md'

function PlayBar() {
    const [playPause, setPlayPause] = useState(false)
  return (
    <div className='fixed justify-center justify-between flex bottom-0 w-full text-white bg-gray-900 border-t border-gray-500 p-4 my-auto'>
        <div className="flex">
            <img src="./images/Rectangle 26.png" alt="" width='50px' className='rounded' />
            <div className="ml-4 text-left">
                <h1 className='font-bold'>Seasons in</h1>
                <p className="font-light text-sm">James</p>
            </div>
        </div>
        <div className="my-auto flex lg:hidden">
                <IconContext.Provider value={{ className: 'text-3xl', color:'yellow' }}>
                    <FaPlayCircle className={playPause ? 'hidden mb-0.5' : 'block'} onClick={()=>setPlayPause(!playPause)} />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'text-3xl', color:'yellow' }}>
                    <FaPauseCircle className={playPause ? 'block mb-0.5' : 'hidden'} onClick={()=>setPlayPause(false)} />
                </IconContext.Provider>
                <IconContext.Provider value={{ color:'white' }}>
                    <FaForward className='ml-8 mt-1' />
                </IconContext.Provider>
        </div>
        <div className="hidden lg:block my-auto">
            <div className="flex justify-evenly w-[300px] m-auto h-auto">
                <IconContext.Provider value={{ color:'white' }}>
                    <FaRandom className='mt-1' />
                </IconContext.Provider>
                <IconContext.Provider value={{ color:'white' }}>
                    <FaBackward className='mt-1' />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'text-3xl', color:'yellow' }}>
                    <FaPlayCircle className={playPause ? 'mb-0.5 hidden' : 'block'} onClick={()=>setPlayPause(!playPause)} />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'text-3xl', color:'yellow' }}>
                    <FaPauseCircle className={playPause ? 'mb-0.5 block' : 'hidden'} onClick={()=>setPlayPause(false)} />
                </IconContext.Provider>
                <IconContext.Provider value={{ color:'white' }}>
                    <FaForward className='mt-1' />
                </IconContext.Provider>
                <IconContext.Provider value={{ color:'white' }}>
                    <MdRepeatOne className='mt-1' />
                </IconContext.Provider>
            </div>
            <div className="w-[500px] bg-gray-500 h-1 rounded mt-4">
                <div className="bg-yellow-500 w-3/6 h-full rounded"></div>
            </div>
        </div>
        <div className="lg:flex hidden">
            <IconContext.Provider value={{ color:'white' }}>
                <FaVolumeUp className='my-auto' />
            </IconContext.Provider>
            <div className="w-36 bg-gray-500 h-1 rounded ml-2 my-auto">
                <div className="bg-yellow-500 w-3/6 h-full rounded"></div>
            </div>
        </div>
    </div>
  )
}

export default PlayBar