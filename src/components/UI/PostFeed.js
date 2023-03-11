import React from "react";
import classes from './PostFeed.module.css'
import Post from "./Post";


const PostFeed = (props) => {
    
    return (
        <article>    
            <Post/>        
            <div>
                <div className={classes.green}>
                    <div>
                        <div className={classes.postImg}>img</div>
                        <div>Account</div>
                    </div>
                    <div className={classes.postInput}>
                        post Content
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.green}>
                    <div>
                        <div className={classes.postImg}>img</div>
                        <div>Account</div>
                    </div>
                    <div className={classes.postInput}>
                        post Content
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.green}>
                    <div>
                        <div className={classes.postImg}>img</div>
                        <div>Account</div>
                    </div>
                    <div className={classes.postInput}>
                        post Content
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.green}>
                    <div>
                        <div className={classes.postImg}>img</div>
                        <div>Account</div>
                    </div>
                    <div className={classes.postInput}>
                        post Content
                    </div>
                </div>
            </div>
        </article>
        )
    };

export default PostFeed;