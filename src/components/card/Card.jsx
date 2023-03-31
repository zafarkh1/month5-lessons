import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  const { id, img, data, summary, title } = props;
  return (
    <div className="card-container">
      <img src={img} alt={title} className="card-image" />
      <div className="text">
        <p className="card-data">{data}</p>
        <h2 className="card-title">{title}</h2>
        <p className="card-summary">{summary}</p>
				<Link to={`news/${id}`}>
					Read More
				</Link>
      </div>
    </div>
  );
};

export default Card;
