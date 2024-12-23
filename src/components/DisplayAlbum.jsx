import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData as allAlbumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = allAlbumsData[id];

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
  <img className="w-32 rounded" src={album.image} alt="" />
  <div className="flex flex-col">
    <p className="text-sm text-gray-400">Playlist</p>
    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
    <h4 className="text-lg text-gray-500">{album.desc}</h4>
    <p className="mt-1 text-sm text-gray-400">
      <img className="inline-block w-5 mr-2" src={assets.spotify_logo} alt="Spotify Logo" />
      <b>Spotify </b>
    
      .4,544,499 likes
      
     . <b>50 songs, </b>
      about 2 hr 30 min
    </p>
  </div>
</div>
    <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className=" mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4 " src={assets.clock_icon} alt=""/>
        
    </div>
    <hr/>
    {
    songsData.map((item, index) => (
        <div
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
            <p className="text-white flex items-center">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="Song Art" />
                {item.name}
            </p>
            <p className="text-[15px] ">{album.name}</p>
            <p className="text-[15px] hidden sm:block"> 5 days ago</p>
            <p className="text-[15px] text-center">{item .duration}</p>
        </div>
    ))
}

    </>
  );
};

export default DisplayAlbum;
