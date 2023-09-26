import FullStar from "../../images/star-active.png"
import EmptyStar from "../../images/inactive-star.png"
import "../Mixin.scss"
import "./Rating.scss"

function Rating({ note }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="stars">
			{stars.map((level) =>
				note >= level ? (
					<img
						key={level.toString()}
						src={FullStar}
						alt="rating star"
						className="stars"
					/>
				) : (
					<img
						key={level.toString()}
						className="stars empty-star"
						src={EmptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}

export default Rating