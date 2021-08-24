import React from 'react';
import './ArticleCard.css';

function ArticleCard(props) {
    return (
        <div className = "Article-card">
         <div className = "article-card">
            <div className = "left">
                <img alt = "article-poster" src = {props.article.image} />
            </div>


            <div className = "right">
                <div className = "title"> {props.article.title} 
                </div>

               
                <div className = "category">Category: {props.article.category} </div>
                
                <div className = "desc"> {props.article.description}</div>

                <a href = {props.article.url}>
                    Visit Article
                </a>

         </div>

        </div>

        </div>
    )
}

export default ArticleCard;
