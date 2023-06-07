import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Logout() {
    return (
        <div className="">
            <Navbar />
            <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 p-4 hover:bg-yellow-500 transition-all mb-20">
                <Link to=''>Log Out</Link>
            </button>
        </div>
    )
}

export default Logout