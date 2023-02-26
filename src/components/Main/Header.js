import React from "react";
const Header = (props) => {
    return (
        <header class="navbar bg-light">
                <form class="container-fluid">
                    <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Wallet" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                </form>
               
        </header>
    )

};

export default Header;