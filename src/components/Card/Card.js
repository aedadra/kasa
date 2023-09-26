import "../Mixin.scss"
import "./Card.scss"

function Card({ cover, title }) {
	return (
		<article className="logement-card">
			<img className="logement-card__img" src={cover} alt="location" />
			<div className="logement-card__div">
				<p className="logement-card__title">{title}</p>
			</div>
		</article>
	);
}

export default Card



