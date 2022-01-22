import { useEffect, useState } from "react";
import axios from 'axios'
import './newsfeed.styles.css'
export const Newsfeed = () => {
  const [articles, setArticles] = useState(null)
  useEffect(() => {
    var options = {
      method: 'GET',
      url: `https://cryptora.herokuapp.com/news`,
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
