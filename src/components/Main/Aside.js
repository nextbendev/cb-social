import React, { useState } from "react";
import {Link} from 'react-router-dom';



const Aside = (props) => {

    const postClickHandler = () => {
        if (!props.showPosts) {
            props.dispPosts()
            console.log("show", props)
        }else {
            props.hidePosts()
            console.log("hide")
        }
    };
 
   
 
    return (
        <aside> 
            <div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                <li class="nav-item">
                    <Link to="/posts" class="nav-link">Post Feed</Link>
                </li>
                </li>
                <li class="nav-item">
                    <Link to="/mynfts" class="nav-link">My Nft's <span class="badge bg-primary rounded-pill">140</span></Link>
                    
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link">ETH Broskis  <span class="badge bg-primary rounded-pill">75</span></Link>
                </li>
                <li class="nav-item">
                 <Link to="/" class="nav-link">Avax Broskis <span class="badge bg-primary rounded-pill">15</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">BrokenSea</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">LooksRare</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">JoePegs</Link>
                </li>
                
                <li class="nav-item">
                    <Link to="/" class="nav-link">Friends</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">Games</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">Wallet</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link disabled">Dao</Link>
                </li>
               
               
                
                </ul>
            </div>
            
            
        </aside>
    )

};

export default Aside;