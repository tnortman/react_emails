const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Emails = require('../lib/emails');

const STYLE_TAG = '%STYLE%';
const CONTENT_TAG = '%CONTENT%';

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath);

    return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
}

/**
 * Renders the React app with the passed data.
 * Returns a promise that resolves to the full email HTML.
 * @param {String} email The react email to render
 * @param {Object} data
 * @return {Promise.<String>}
 */
function createEmail(email, data) {
  return Promise.all([
    getFile('../src/inlined.css'),
    getFile('./email.html'),
  ])
    .then(([style, template]) => {
      const Email = Emails[email];
      const emailElement = React.createElement(Email, { data });
      const content = ReactDOMServer.renderToStaticMarkup(emailElement);

      // Replace the template tags with the content
      let emailHTML = template;
      emailHTML = emailHTML.replace(CONTENT_TAG, content);
      emailHTML = emailHTML.replace(STYLE_TAG, style);

      return emailHTML;
    });
}

module.exports = createEmail;
