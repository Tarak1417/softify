import React from "react"
import Navbar from "./Navbar"
import Albumitem from "./Albumitem"
import { albumsData } from "../assets/assets"
import { songsData } from "../assets/assets"
import Songitems from "./Songitems"


const DisplayHome=()=>{
    return(
        <>
         <Navbar/>
         <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Featured Chart</h1>
            <div className="flex overFlow-auto">
            {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
           
         </div>
         <div className="mb-4">
    <h1 className="my-5 font-bold text-2xl">Today's Hits</h1>
    <div className="flex overflow-auto space-x-4">
        {songsData.map((item, index) => (
            <Songitems 
                key={index} 
                name={item.name} 
                desc={item.desc} 
                image={item.image} 
                id={item.id} 
            />
        ))}
    </div>
</div>

        </>
    )
}
export default DisplayHome