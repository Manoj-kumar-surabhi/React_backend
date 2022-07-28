import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import Advertisement from "./Advertisement";

const Bollywood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://backendakarsh.herokuapp.com/api/bollywood";

    fetch(url).then((res) => res.json()).then((res) => setData(res));
  }, []);


  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
      <div className="main__container">
        <div className="pageleft">
          {data
            .filter((article) => {
              return article.category === "Bollywood";
            }).map((result) => (
              <Card
                articleid={result.id}
                imgUrl={result.Image}
                title={result.title}
                description={result.description.slice(0, 200)}
                desc={result.description}
                author={result.author}
              />
            ))}
        </div>
        <Advertisement />
      </div>
    </div>
  );
};
export default Bollywood;