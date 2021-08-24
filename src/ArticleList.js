import React from 'react';
import ArticleCard from './ArticleCard';
import './ArticleList.css';
import { v4 as uuidv4 } from 'uuid';

function ArticleList(props) {
    return (
        <div className = "article-list">
            <div className = "article-title">
                {
                    props.articles.map((article) => (
                        <ArticleCard article = {article}/>
                        <h4 key={uuidv4()}>{article.title} </h4>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleList;
