import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Card from "../card/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((news) => (
        <Card
          key={news.id}
          id={news.id}
          title={news.title}
          data={news.publishedAt}
          img={news.imageUrl}
          summary={news.summary}
        />
      ))}
    </div>
  );
};

export default Home;
