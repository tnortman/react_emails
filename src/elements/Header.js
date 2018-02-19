import React from 'react';

import Grid from '../layout/Grid';
import Img from './Img';
import Title from './Title';

const style = {

  header: {
    backgroundColor:'#FFFFFF',
    textAlign:'center'
  },

  img: {
    maxWidth: '200px',
    padding: '15px 5px 0 5px',
    height: 'auto !important',
    width: '100% !important',
    margin: 'auto',
  },

};

function Header({location}) {
  return (
    <Grid style={style.header}>
      <Img style={style.img} src={location.ImageUrl} alt="logo" />
      <Title>You've received a gift card!</Title>
    </Grid>
  );
}

export default Header;

