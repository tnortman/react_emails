import React from 'react';

import Grid from '../layout/Grid';

const style = {

	wrapper: {
		width: 'auto',
		margin: '0 auto',
	},

	title: {
		fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",
		color:"#909090",
		fontSize:"44px",
		fontWeight:"100", 
		lineHeight:"115%", 
		textAlign:"center",
	},

};

function Title({ children }) {
	return (
		<Grid style={style.wrapper}>
			<h1 style={style.title} className="title-heading">
				{children}
			</h1>
		</Grid>
	);
}

export default Title;

