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
    ImageUrl: 'https://s3.amazonaws.com/setup-mobilebytes.com/2301533693/logos/Logo_1501694663.png',
    Name: `Cafe MB`,
  },
  GiftCard: {
  	Account: 8282820000002678,
  	CVV: 784,
  	Amount: 25,
    From: 'Tim Nortman'
  }
};


const Email = Emails['Gift'];

ReactDOM.render(
  <Email data={mockData} />,
  document.getElementById('root')
);

