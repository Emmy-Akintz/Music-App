import React from "react";
import Navbar from '../components/Navbar'
import NewReleaseCarousel from "../components/New-Release-Carousel";
import Topcharts from "../components/Topcharts";
import Intro from "../components/Intro";
import Search from "../components/Search";

function Home() {
    return (
        <div className="flex mb-20">
            <Navbar />
            <div className="m-4 w-[90%] m-auto">
                <Search />
               <div className="block lg:flex md:flex mt-12">
                    <Intro />
                    <Topcharts />
               </div>
                <NewReleaseCarousel />
            </div>
        </div>
    )
}

export default Home