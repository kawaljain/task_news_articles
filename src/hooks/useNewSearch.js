/**
 * Responsibe for fetching the news article
 */
import { useState, useEffect } from "react";
import { getNews } from "../api/news";

export default function useNewsSearch(name) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setArticles([]);
      return;
    }

    if (name.length <= 2) {
      setError("Name Length must be greater than 2");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getNews("/v1/news/search", { name });

        setArticles(response.articles);
      } catch (err) {
        let errorMsg = err?.response?.data?.error
          ? err?.response?.data?.error
          : "Error in Fetching article";

        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [name]);

  return { articles, loading, error };
}
