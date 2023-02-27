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
            <h3>Crypto</h3>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Chain</th>
                    <th scope="col">Token</th>
                    <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Ethereum</th>
                    <td>Eth</td>
                    <td>1</td>
                    </tr>
                    <tr>
                    <th scope="row">Avax</th>
                    <td>AVAX</td>
                    <td>40</td>
                    </tr>
                    <tr>
                    <th scope="row">BSC</th>
                    <td>BNB</td>
                    <td >2</td>
                    </tr>
                </tbody>
            </table>
            <h3>NFT's</h3>
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