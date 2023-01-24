import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaPause, FaPlay } from "react-icons/fa";
// import Carousel from 'react-grid-carousel'
import { library } from "../albumList";
import '../App.css'
// import {playPause, setPlayPause} from './PlayBar'

function NewReleaseCarousel() {

     const [playPause, setPlayPause] = useState(true)

    return (
        <>
            <h1 className="font-bold text-xl text-left text-white">New releases.</h1>
            <div className="card-parent block md:flex lg:flex items-center md:justify-between lg:justify-between mt-4 text-white text-center md:text-left lg:text-left">
                {library.map((e) => (
                    <div className="card block m-2 w-[200px] md:w-[180px] m-auto">
                        <img src={e.image} alt="" className="card-image m-auto" />
                        <div>{e.title}</div>
                        <div className="card-button relative left-8 md:left-20 lg:left-36 bottom-16 bg-yellow-500 w-8 h-8 p-4 rounded-2xl">
                            <IconContext.Provider value={{ color: 'white' }}>
                                <FaPlay className={playPause ? 'relative right-2 bottom-2 block' : "hidden"} onClick={() => setPlayPause(!playPause)} />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: 'white' }}>
                                <FaPause className={setPlayPause? "hidden": 'block relative right-2 bottom-2' } onClick={() => setPlayPause(false)} />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewReleaseCarousel