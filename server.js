const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//for post reqs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for routes
app.use(routes);

const models = require('./models');

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})
});
