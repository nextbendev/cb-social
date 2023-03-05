import React, { useState } from "react";
const Aside = (props) => {
 
    return (
        <aside> 
            <div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">JoePegs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://opensea.io/collection/avaxcryptobroskis">OpenSea Avax</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://opensea.io/collection/officialcryptobroskis">OpenSea Eth</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://looksrare.org/collections/0xeAa7Aa689eec0e3Ceb70E288d23e01E874a98E5c">LooksRare</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contract</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="setArticlePage('PostFeed')">Post's</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Friend's</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Games</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Wallet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nfts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">DAO</a>
                </li>
               
                
                </ul>
            </div>
            
            
        </aside>
    )

};

export default Aside;