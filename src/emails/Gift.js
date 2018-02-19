import React from 'react';

import Grid from '../layout/Grid';
import Header from '../elements/Header';
import Body from '../elements/Body';
import Footer from '../elements/Footer';
import GiftCard from '../elements/GiftCard';

const style = {

  container: {
	backgroundColor: '#CDCDCD',
	fontFamily: 'sans-serif',
  },

  main: {
	maxWidth: '520px',
	width: '100%',
  },
  text: {
  	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: '14px',
	color: '#263238',
	margin: '1em 0'
  }

};

export default ({ data }) => (
	<center style={style.container}>
		<Grid style={style.main}>
			<Header location={data.Location} />
			<Body>
				<Grid style={{}}>
					<Grid>
						<p style={style.text}>Hello,</p>
						<p style={style.text}>{data.User.Name} has sent you a ${parseFloat(data.GiftCard.Amount).toFixed(2)} gift card.</p>
						<p style={style.text}>Enjoy!</p>
					</Grid>
					<GiftCard {...data.GiftCard} location={data.Location} />
				</Grid>
			</Body>
			<Footer />
		</Grid>
	</center>
);

