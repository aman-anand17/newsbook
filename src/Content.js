import React from "react";
import "./Content.css";
import Categorybar from "./Categorybar.js";
import {getNewsArticles} from './api';
import ArticleList from "./ArticleList";

class Content extends React.Component{

    state = {
        articles: [],
        apiError: "",
    };

   async componentDidMount() {
        try {
          const response = await getNewsArticles();
          this.setState({articles: response.data });
        } 
        catch (error) {
          this.setState({ apiError: "Could not find any articles" });
        }
      }


       render() {

            const {articles, apiError} = this.state;

            return(
              <section className="contentmain">
                <Categorybar/>
                <div className="content">
                 
                     <div className = "articles-container">

                       
                            <h3>Trending Articles</h3>

                               {articles.length > 0 && <ArticleList articles = {articles} />}
                               {apiError && <p>Could not fetch any articles. Please try again.</p>}

                     </div>
                </div>

              </section>
                
            );
        }
}

export default Content;