import React from "react";
const Aside = (props) => {
    return (
        <aside> 
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
        </aside>
    )

};

export default Aside;