import React from 'react';

function ArticleList(props) {
    return (
        <div className = "article-list">
            <div className = "article-title">
                {
                    props.articles.map((article) => (
                        <h4>{article.title} </h4>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleList;
