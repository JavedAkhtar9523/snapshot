import React,{ useContext } from "react";
import {Link} from "react-router-dom";
import {GalleryContext} from "../context/GalleryContext"

const Header=()=>{
    const {setSearchQuery}=useContext(GalleryContext);
    const handleSearch=(event)=>{
        setSearchQuery(event.target.value);
    }
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All</Link>
                        </li>
                        <li>
                            <Link to="/mountains">Mountains</Link>
                        </li>
                        <li>
                            <Link to="/beaches">Beaches</Link>
                        </li>
                        <li>
                            <Link to="/birds">Birds</Link>
                        </li>
                        <li>
                            <Link to="/food">Food</Link>
                        </li>
                        <li>
                            <input type="text" placeholder="search" onChange={handleSearch}/>
                            <Link to="/search">
                                <button>search</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;