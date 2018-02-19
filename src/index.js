import React from 'react';
import ReactDOM from 'react-dom';

import * as Emails from './emails';

import './inlined.css';

/**
 * This file is not used when rendering the email on the server.
 * It's the perfect place to include mock data for development.
 */

const mockData = {
  Location:{
    ImageUrl: 'https://s3.amazonaws.com/setup-mobilebytes.com/1300972036/logos/Color_Logo_1469490469.png',
    Name: `BurgerBytes Central`,
  },
  User: {
    Name: 'Tim Nortman'
  },
  GiftCard: {
  	Account: 8282820000002678,
  	CVV: 784,
  	Amount: 25,
  }
};


const Email = Emails['Gift'];

ReactDOM.render(
  <Email data={mockData} />,
  document.getElementById('root')
);

