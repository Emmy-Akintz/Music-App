import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IconContext } from "react-icons";

function Intro() {
    return (
        <div className="">
            <div className="w-[97%] lg:w-[100%] bg-blue-500 h-[250px] flex border-none rounded-3xl ml-5 md:ml-0 lg:ml-0">
                <div className="text-left text-white p-4 pl-4 items-center">
                    <p>Currated playlist</p>
                    <br />
                    <h1 className="font-bold text-3xl">R & B Hits</h1>
                    <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad Habit, and so much more</p>
                    <br />
                    <p>
                        <IconContext.Provider value={{ text: 'xl', color: 'white' }}>
                            <FaHeart />
                        </IconContext.Provider>
                        33k Likes
                    </p>
                </div>
                <img src="./images/Rectangle_26_removebg.png" alt="" className="hidden lg:block" />
            </div>
        </div>
    )
}

export default Intro