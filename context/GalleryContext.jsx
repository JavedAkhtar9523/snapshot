import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const GalleryContext=createContext();

export const GalleryProvider=({children})=>{
    const API_KEY="a1886db7ed8f23d777615c363ddb1c9d";
    const API_SECRET='6567a1416c4d14fd';
    const [images,setImages]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchImages=async(query,category)=>{
        setLoading(true);
        setError(null);

        let url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}per_page=20&format=json&nojsoncallback=1`
        if(category){
            url+=`&tags=${category}`;
        }
        try{
            const response=await axios.get(url);
            setImages(response.data.photos.photo);
        }catch(error){
            setError(error.message);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchImages('nature');
    },[]);

    return(
        <GalleryContext.Provider value={{images,loading,error,fetchImages}}>
            {children}
        </GalleryContext.Provider>
    );

}
