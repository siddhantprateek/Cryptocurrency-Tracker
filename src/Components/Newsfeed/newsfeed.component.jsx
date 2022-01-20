import { useEffect, useState } from "react";
import axios from 'axios'
import './newsfeed.styles.css'
export const Newsfeed = () => {
  const [articles, setArticles] = useState(null)
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': '582d94096fmshc5a87c0ae259914p162d91jsn8298fe1a35be'
      }
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="articles">-
        {articles?.map((article, _index) => (
            <div className="article-content" key={_index}>
                <a target='__blank' href={article.url}>
                    <p>{article.title}</p>
                </a>
            </div>
        ))}
    </div>
  );
};
