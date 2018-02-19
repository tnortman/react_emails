# react_emails
Create Emails Server Side with React

# Generating Emails with React
This is an example project you can use to generate emails with React. You can start by reading the article [here](https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1).

### Example

To generate the example email:

```
$ npm install
$ npm run build
$ node example/myEmailType.js
```

The result html will be saved in the working directory.

### Development

This project was bootstrapped with [Create React App][react-create-app].
 See the development guide [here][react-create-app-guide].


### Creating the email

To create the email, simply import the module and call the function with the
data. It returns a promise that resolves to the full HTML template as a string.

```js
const createEmail = require('react-emails-example');

const emailType = 'Gift';

const data = { 
  Location: ...,
  GiftCard: ...,
  User: ...,
};

createEmail(emailType, data)
  .then((html) => {
    // Send the HTML with your email service of choice
  });
```
