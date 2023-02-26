import React, { useState } from "react"
const Image=({src,alt})=>{
    const [hover,setHover]=useState(false);

    const handleMouseEnter=()=>{
        setHover(true);
    }
    const handleMouseLeave=()=>{
        setHover(false);
    }
    return(
        <div style={{
            position:"relative",
            display:"inline-block"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        >
            <img src={src} alt={alt} />
            {hover &&(
                <div
                style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(0,0,0,0.5)',
                    display:"flex",
                    justifyContent:'center',
                    alignItems:'center'
                }} 
                >
                    <img src={src} alt={alt} style={{maxWidth:'85%',maxHeight:'85%'}}/>

                </div>
            )}
        </div>
    )
}
export default Image;