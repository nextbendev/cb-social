import React from "react";
import classes from './Article.module.css'
const Article = (props) => {
    return (
        <article>
            <div>
                <div className={classes.red}>help</div>
                <div className={classes.red}>
                    <div className={classes.green}>eeee</div>
                    <div className={classes.blue}>wwww</div>
                </div>
            </div>
        </article>
    )

};

export default Article;