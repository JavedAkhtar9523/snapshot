// const { useState, useContext } = require("react");
import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import GalleryContext from "../context/GalleryContext";

const Gallery = (props) => {
    const [images, setImages] = useState([]);
    const { searchQuerry } = useContext(GalleryContext);


    useEffect(() => {
        let apiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search"

        let apiKey = "a1886db7ed8f23d777615c363ddb1c9d";
        let category = props.category;
        if (category) {
            apiUrl += `&text=${searchQuerry}`;

        }
        apiUrl += `&api_key=${apiKey}&per_page=20&format=json&nojsoncallback=1`;

        axios.get(apiUrl).then((res) => {
            setImages(res.data.photos.photo)
        }).catch((err) => {
            console.log(err);
        })


    },[searchQuerry,props.category])

    return(
        <div className="gallery">
            {images.map((image)=>{
                <img src={`https://live.staticflickr.com'/${image.server}/${image.id} ${image.secret}q.jpg`} alt={image.title} />
            })}

        </div>
    )

}
export default Gallery;