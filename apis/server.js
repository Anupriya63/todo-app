const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./models');


db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

var corsOptions = {
  origin: 'http://localhost:3006'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to todo backend application.' });
});

require('./routes/todo.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});