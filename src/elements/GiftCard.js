import React from 'react';

// import Barcode from 'react-barcode';
import Img from './Img';

const styles = {
	card: {
		background: '#fff',
		borderRadius: '5px',
		margin: '1rem',
		position: 'relative',
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
		display: 'flex',
		flexDirection:'column',
		padding: '10px',
	},
	img: {
		maxWidth: '75px',
		padding: '15px 5px 0 5px',
		height: 'auto !important',
		width: '100% !important',
		margin: 'auto',
	},
	top:{
		display: 'flex',
		flexDirection:'row'	
	},
	topRight: {
		display: 'flex',
		justifyContent:'flex-start',
		marginLeft:"10px",
		flex:1,
	},
	info: {
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'flex-end',
		marginLeft: '25px',
	},
	bottom: {
		display: 'block',
		margin: 'auto',
	},
	amount: {
		fontSize: '20px',
		color: '#78909c',
		marginBottom: '0',
	},
	text: {
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: '14px',
		color: '#263238',
		margin: '1em 0'
	},
	subText: {
		fontSize: '12px',
		color: '#90a4ae'
	},
	merchant: {
		fontWeight: '700',
		margin: '0',
		marginTop: '5px'
	},
	header: {
		fontSize: '16px',
		color: '#78909c',
		marginBottom: '0',
	},
	number: {
		fontSize: '12px',
	}
};

export default ({ giftCard, location }) => {
	return (
		<div style={styles.card}>
			<div style={styles.top}>
				<div style={styles.topLeft}>
					<Img style={styles.img} src={location.ImageUrl} alt="logo" />
				</div>
				<div style={styles.topRight}>
					<div style={{}}>
						<div style={{}}>
							<p style={{...styles.text, ...styles.amount}}>${parseFloat(giftCard.Amount).toFixed(2)} Gift Card</p>
							<p style={{...styles.text, ...styles.merchant}}>{location.Name}</p>
						</div>
						<div style={{paddingTop: '20px'}}>
							<p style={{...styles.text, ...styles.header}}>Gift Card Number</p>
							<p style={{...styles.text, ...styles.number}}>{giftCard.Account}</p>
						</div>
					</div>
					<div style={styles.info}>
						<div>
							<p style={{...styles.text, ...styles.header}}>CVV</p>
							<p style={{...styles.text, ...styles.number}}>{giftCard.CVV}</p>
						</div>
					</div>
				</div>
			</div>
			{/*<div style={styles.bottom}>
				<Barcode value={Account.toString()} width={3} />
			</div>*/}
		</div>
	);
}

