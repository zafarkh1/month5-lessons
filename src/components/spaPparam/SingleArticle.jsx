import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const SingleArticle = () => {

	const [data, setData] = useState([])
	const {id} = useParams()

	const fetchData = async () => {
		try {
			const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
			setData(response.data)
		} catch (error) {
			
		}
	}

	useEffect(() => {
		fetchData()
	}, [])


	return (
    <div>
      <div className="article">
        <div className="article__header">
          <img src={data.img} alt={data.title} />
        </div>
        <div className="article__container">
          <div className="article__section">
            <h3 className="article__section--h3">{data.title}</h3>
            <p className="article__section--p">{data.summary}</p>
          </div>
          <Link to="/" className="article__btn">
            <span>Back to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle