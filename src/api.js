import { NEWS_API_KEY } from "./config";

export const getNewsArticles = async () => {
  const response = await fetch(
    `https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
