import React from "react";
import PostFeed from '../UI/PostFeed'
import Nfts from './Nfts'
import PostBox from "../UI/Post";


import classes from './Article.module.css'
const Article = (props) => {
    return (
            <article className={classes.flexContainer}>
                <PostBox/>

                {props.showPosts && <PostFeed/>}
               
            </article>
    )

};

export default Article;