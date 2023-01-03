import React from "react";
// import Carousel from 'react-grid-carousel'
import { library } from "../albumList";

function NewReleaseCarousel() {
    return (
        <>
            <h1 className="font-bold text-xl text-left text-white">New releases.</h1>
            <div className="block md:flex lg:flex justify-between mt-4 text-white text-center md:text-left lg:text-left">
                {library.map((e) => (
                    <div className="block m-2">
                        <img src={e.image} alt="" className="m-auto" />
                        <div>{e.title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewReleaseCarousel