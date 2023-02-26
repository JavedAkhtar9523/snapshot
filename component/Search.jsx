import { useContext, useState } from "react"
import { GalleryContext } from "../context/GalleryContext";


const Search=()=>{
    const [searchValue,setSerchValue]=useState("");

    const {setSearchQuery}=useContext(GalleryContext);

    const handleSearch=(e)=>{
        setSerchValue(e.target.value);
        setSearchQuery(e.target.value);
    }
    return(
        <div>
            <input type="text" value={searchValue} onChange={handleSearch}/>
        </div>
    )
}
export default Search;