const fs = require('fs');

/**
 * You can also install the package as a module and require it.
 *
 * For example in our production server, we have a repository with all the
 * emails layouts created with this same tecnique.
 * The package name is `@sentisis/emails` and then we simply require it:
 *
 *     const createEmail = require('@sentisis/emails');
 *
 * The package contains the files already transpiled with babel.
 */
const createEmail = require('../server/createEmail');

function saveEmail(email) {
  return new Promise((resolve, reject) => {
	fs.writeFile('gift.html', email, (err) => {
	  if (err) return reject(err);
	  return resolve();
	});
  });
}

createEmail('Gift', {
	Location:{
		ImageUrl: 'https://s3.amazonaws.com/setup-mobilebytes.com/2301533693/logos/Logo_1501694663.png',
		Name: `Cafe MB`,
	},
	User: {
		Name: 'Tim Nortman'
	},
	GiftCard: {
		Account: 8282820000002678,
		CVV: 784,
		Amount: 50,
	}
}).then(email => {
	saveEmail(email);
}).catch(err => {
	console.log('I ERRORED :(');
	console.log(err);
});