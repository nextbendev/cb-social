import React from "react";
import classes from './PostFeed.module.css'


const PostFeed = (props) => {
    return (
        <div>            
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
        </div>
        )
    };

export default PostFeed;