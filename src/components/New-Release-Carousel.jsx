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
            <div className="block md:flex lg:flex justify-between mt-4 text-white text-center md:text-left lg:text-left">
                {library.map((e) => (
                    <div className="card block m-2">
                        <img src={e.image} alt="" className="m-auto" />
                        <div>{e.title}</div>
                        <div className="card-button relative left-28 bottom-16 bg-yellow-500 w-8 h-8 p-4 rounded-2xl">
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