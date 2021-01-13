const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '/dist/i18n-meetup')));

// Serve application paths
app.all('*', function (req, res) {
  res.status(200).sendFile('/', { root: path.join(__dirname, '/dist/i18n-meetup') });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({ error: message });
}
