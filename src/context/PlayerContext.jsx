import { createContext,useEffect,useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext=createContext();

const PlayerContextProvider=(props)=>{

    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();

    const [track,setTrack]=useState(songsData[0]);
    const [playStatus,setPlayerStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
  
    const play=()=>{
        audioRef.current.play();
        setPlayerStatus(true)
    }

    const pause =()=>{
        audioRef.current.pause();
        setPlayerStatus(false)

    } 
    
   useEffect(() => {
        console.log('useEffect called');
        setTimeout(() => {
            if (audioRef.current) {
                console.log('Setting ontimeupdate');
                audioRef.current.ontimeupdate = () => {
                    console.log('ontimeupdate event triggered');
                    setTime({
                        currentTime: {
                            second: Math.floor(audioRef.current.currentTime % 60),
                            minute: Math.floor(audioRef.current.currentTime / 60)
                        },
                        totalTime: {
                            second: Math.floor(audioRef.current.duration % 60),
                            minute: Math.floor(audioRef.current.duration / 60)
                        }
                    });
                };
            } else {
                console.log('audioRef.current is null');
            }
        }, 1000);
    }, [audioRef]);

    const contextValue={
       audioRef,
       seekBar,
       seekBg,
       track,setTrack,playStatus,setPlayerStatus,time,setTime,play,pause
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider

