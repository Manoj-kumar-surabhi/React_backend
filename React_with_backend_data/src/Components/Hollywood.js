import React, { useEffect, useState } from 'react'
import Card from "../Card/Card";
import Advertisement from "./Advertisement";
const Hollywood = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://backendakarsh.herokuapp.com/api/hollywood";
    fetch(url).then(res => res.json())
      .then(res => setData(res))


  }, [])

  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Hollywood</h1>
      <div className="main__container">
        <div className="pageleft">
          {data.filter((article) => {
              return article.category === "Hollywood" }).map((result) => (
              <Card
                articleid={result.id}
                imgUrl={result.Image}
                title={result.title}
                description={result.description.slice(0, 100)}
                desc={result.description}
                author={result.author}
              />
            ))}
        </div>
        <Advertisement/>
      </div>
    </div>
  )
}

export default Hollywood

// git remote add origin https://github.com/Akarshgu/React_with_backend_data.git