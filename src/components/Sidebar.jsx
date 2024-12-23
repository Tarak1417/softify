import React from "react";
import { assets } from '../assets/assets';

const Sidebar = () => {
    return (
        <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around p-4 space-y-4">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.home_icon} alt="Home Icon" className="w-6" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.search_icon} alt="Search Icon" className="w-6" />
                    <p className="font-bold">Search</p>
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon} alt="Library Icon" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
                    </div>
                </div>
                <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-2">
                    <h1>Create Your Playlist</h1>
                    <p className="font-light">It's easy, we will help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
                </div>
                <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-2 mt-4">
                    <h1>Let's findsome  podcasts to follow</h1>
                    <p className="font-light">we'll Keep you update on new episodes</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse podcasts</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
