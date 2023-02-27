import React, { Fragment } from "react";
import NftCard from "../UI/NftCard";
import classes from './Nfts.module.css'

const Nfts = (props) => {
    return (
            <article >

               <div className={classes.nftDisp}>
                    <div class="card" className='classes.card'>
                        <img src="https://cryptobroskis.com/cryptobroskis/avaxImg/1.png" class="card-img-top" className={classes.nftImg} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">CONTENT HERE</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" className='classes.card'>
                        <img src="https://cryptobroskis.com/cryptobroskis/avaxImg/1.png" class="card-img-top" className={classes.nftImg} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">CONTENT HERE</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" className='classes.card'>
                        <img src="https://cryptobroskis.com/cryptobroskis/avaxImg/1.png" class="card-img-top" className={classes.nftImg} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">CONTENT HERE</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" className='classes.card'>
                        <img src="https://cryptobroskis.com/cryptobroskis/avaxImg/1.png" class="card-img-top" className={classes.nftImg} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">CONTENT HERE</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" className='classes.card'>
                        <img src="https://cryptobroskis.com/cryptobroskis/avaxImg/1.png" class="card-img-top" className={classes.nftImg} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">CONTENT HERE</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" className='classes.card'>
                        <img src="https://cryptobroskis.com/cryptobroskis/avaxImg/1.png" class="card-img-top" className={classes.nftImg} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">CONTENT HERE</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
               </div>
             
            </article>
    )

};

export default Nfts;