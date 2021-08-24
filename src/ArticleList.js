import React from 'react';
import ArticleCard from './ArticleCard';
import './ArticleList.css';

function ArticleList(props) {
    return (
        <div className = "article-list">
            <div className = "article-title">
                {
                    props.articles.map((article) => (
                        <ArticleCard article = {article}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleList;
