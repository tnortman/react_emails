import React from 'react';

import Grid from '../layout/Grid';
import Img from './Img';

const style = {

	footer: {
		backgroundColor: '#DCDCDC',
	},

	dontReply: {
		fontSize: '14px',
		textAlign: 'center',
		color: '#000000'
	},

	p: {
		color:'#777',
		fontSize: '14px',
		textAlign: 'center',
	},

	a: {
		color: '#00a1ef',
	},

	img: {
		margin: 'auto',
		padding: '10px 10px'
	}
};

function Footer() {
	return (
		<Grid style={style.footer}>
			<Grid.Cell style={style.content}>
				<p style={style.dontReply}>
					<strong>PLEASE DO NOT REPLY.</strong>
				</p>
				<p style={style.p}>
					This is a system-generated message from an unmonitored mailbox.
				</p>
				<p style={style.p}>
					For more information, please visit <a target="_blank" style={style.a} href="http://www.mobilebytes.com">www.mobilebytes.com</a>.
				</p>
	      <Img style={style.img} src={"https://d3bsq3k61902i2.cloudfront.net/app_base/img/mobilebytes/mb-online-ordering-black.png"} alt="logo" />
			</Grid.Cell>
		</Grid>
	);
}

export default Footer;

