import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const { imgUrl, title, description, articleid, desc, } = props;
    return (
        <div >

            <NavLink state={{ title: title, img: imgUrl, description: description, desc: desc, id: articleid }} to={`/article/${articleid}`}>
                <div className={articleid} >

                    <div className="card__container" >
                        <div className='card__image'>

                            <img src={imgUrl} alt={title} />
                        </div>
                        <div className='bigcard__data'  >
                            <h5 >{title}</h5>
                            <p>{description}....</p>

                        </div>
                    </div>
                    <hr style={{ fontWeigth: "30px", color: "black" }} />
                </div></NavLink>
        </div>
    )
}

export default Card