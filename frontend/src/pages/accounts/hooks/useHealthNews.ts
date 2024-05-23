import { useEffect, useState } from "react";
import { fetchGoogleHealthNews } from "../functions/fetchGoogleHealthNews";

export const useHealthNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchGoogleHealthNews().then((response) => {
      setNews(response.news);
    });
  }, []);

  return {
    news,
  };
};
