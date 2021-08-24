import { NEWS_API_KEY } from "./config";

export const getNewsArticles = async () => {
    const response = await fetch(
        `http://api.mediastack.com/v1/news?access_key=${NEWS_API_KEY}&countries=in&languages=en`
    );
    const json = await response.json();
    return json;
  };