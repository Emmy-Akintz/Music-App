import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { IconContext } from "react-icons";

function Search() {
    return (
        <div className="flex text-white">
            <IconContext.Provider value={{ color: 'gray' }}>
                <MdSearch className="absolute right-10 lg:relative md:relative lg:left-2 md:left-2" />
            </IconContext.Provider>
            <input type="text" name="" id="" placeholder="Search artist" className="h-4 bg-gray-800 ml-4 text-gray hidden lg:block md:block" />
        </div>
    )
}

export default Search