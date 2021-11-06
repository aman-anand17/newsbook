import React from "react";
import "./ArticleCard.css";

function ArticleCard(props) {
  return (
    <div
      className="article-card"
      onClick={() => window.open(`${props.article.url}`)}
    >
      <div className="article-card-container">
        <div className="left">
          <img alt="article-poster" src={props.article.image} />
        </div>

        <div className="right">
          <div className="title"> {props.article.title}</div>
          <div className="share-options">
            <button className="share-button">Read More..</button>
          </div>
          <div className="desc"> {props.article.content}</div>
          <footer className="footer">
            <div className="source">Source: {props.article.source.name}</div>
            <div className="published-time">
              {props.article.publishedAt.slice(0, 10)}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
