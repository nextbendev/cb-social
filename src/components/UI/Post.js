import React from "react";
import classes from './PostFeed.module.css'
const Post = (props) => {
    return (
        <div>
            <div className={classes.postBox}> 
                <div>
                    <div>input</div>
                    <button>send</button>
                </div>
            </div>
         </div>
    )
};

export default Post;