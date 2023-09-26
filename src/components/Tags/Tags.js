import "../Mixin.scss"
import "./Tag.scss"

function Tags(props) {
	return (
		<div >
			<span className="tag">{props.tags}</span>
		</div>
	);
}

export default Tags