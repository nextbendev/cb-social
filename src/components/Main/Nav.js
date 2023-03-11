import React from "react";
import classes from './Nav.module.css';
const Nav = (props) => {
    return (
        <nav>
            <div className={classes.flexContainer}>
                <div className={classes.red}>Profile Img</div>
                <div className={classes.blue}>
                    <div className={classes.yellow}>Name</div>
                    <div className={classes.green}>Account</div>
                    <div className={classes.yellow}>Info</div>
                </div>
            </div>
            
            <h3>Account Info</h3>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Avax NFT's owned
                    <span class="badge bg-primary rounded-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                      Eth NFT's owned
                    <span class="badge bg-primary rounded-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                      Matic NFT's owned
                    <span class="badge bg-primary rounded-pill">1</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                      Dao Member
                    <span class="badge bg-primary rounded-pill">Yes</span>
                </li>
            </ul>
        </nav>
        
        
    )

};

export default Nav;