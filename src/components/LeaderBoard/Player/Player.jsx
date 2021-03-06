import React from "react";
import "bulma/css/bulma.css";
import "./Player.css";

class Player extends React.Component {
	render() {
		const { index, id, nom, value, selectPlayer, style } = this.props;

		return (
			<li>
				<div
					class='notification player'
					style={style}
					onClick={() => {
						selectPlayer(id);
					}}>
					<div class='columns'>
						<div class='column is-2'>
							{index === 0 ? (
								<img
									src={require("../../../images/winner.png")}
									alt=''
									class='player-img-winner'
								/>
							) : (
								<img
									src={require("../../../images/" + nom + ".png")}
									alt=''
									class='player-img'
								/>
							)}
						</div>
						<div class='column is-2'></div>
						<div class='column text is-4'>
							<h2 class='title'>{nom}</h2>
						</div>
						<div class='column text is-3'></div>
						<div class='column text is-1'>
							<h3 class='title'>{value}</h3>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default Player;
