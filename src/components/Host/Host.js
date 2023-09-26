import "../Mixin.scss"
import "./Host.scss"

function Host(props) {
	return (
		<div className="host">
			<div className="host__name">{props.hostName}</div>
			<img className="host__img" src={props.hostImage} alt="" />
		</div>
	);
}

export default Host