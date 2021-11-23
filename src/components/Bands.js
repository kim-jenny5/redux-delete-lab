import React from "react";
import Band from "./Band";

export const Bands = (props) => {
	return (
		<div>
			<ul>
				{props.bands.map((band) => {
					return <Band key={band.id} band={band} delete={props.delete}></Band>;
				})}
			</ul>
		</div>
	);
};
