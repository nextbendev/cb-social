import React from "react";
import PostFeed from '../UI/PostFeed'
import Nfts from './Nfts'

import classes from './Article.module.css'
const Article = (props) => {
    return (
            <article className={classes.flexContainer}>
                
                <Nfts/>
                
            </article>
    )

};

export default Article;