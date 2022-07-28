import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Cards from "../Card/Cards";
import Advertisement from "./Advertisement";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://backendakarsh.herokuapp.com/api/home";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <div className="home__first">
            <h1 color="white">France: A Mix Of Everything Jolly</h1>
          </div>
          <div className="home__sec">
            <Link to="/fitness">

              <img
                src="https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg"
                alt="not found"
              />
              <h1>Make your Body Fit</h1>
            </Link>
          </div>
        </div>
        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              < Cards
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              < Cards
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              < Cards
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>
        <Advertisement/>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>
       

        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <Cards
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <Cards
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <Cards
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                desc={n.description}
                author={n.author}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;