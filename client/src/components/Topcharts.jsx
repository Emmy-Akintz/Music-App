import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { library2 } from '../topChart';

function Topcharts() {
    return (
        <div className="w-[100%] lg:w-[40%] text-white text-left p-4 pt-0">
            <h1 className="font-bold text-xl">Top charts 🔥</h1>
            <div className="p-1 h-[260px] md:h-[220px] lg:h-[220px] justify-betweem lg:flex-col md:flex-col md:flex lg:flex flex overflow-x-auto no-scrollbar md:overflow-scroll lg:overflow-scroll">
                {library2.map((e) => (
                    <div>
                        <div className="block md:flex lg:flex justify-between items-center bg-gray-900 p-2 border-none rounded-xl m-1 lg:m-0.5 md:m-0.5 min-w-[300px] h-[220px] md:h-auto lg:h-auto lg:w-full md:w-full">
                            <div className="block md:flex lg:flex">
                                <img src={e.image} alt="" width='50px' />
                                <br />
                                <div className="ml-3">
                                    <p className="font-bold text-xs">{e.title}</p>
                                    <p className="font-light text-xs">{e.artist}</p>
                                    <p className="text-xs">{e.duration}</p>
                                </div>
                            </div>
                            <br />
                            <div className="border border-gray rounded-3xl p-3 w-10">
                                <IconContext.Provider value={{ color: '' }}>
                                    <FaHeart />
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topcharts