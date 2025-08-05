npm install sequelize pg pg-hstore
const { Sequelize } = require('sequelize');

// Replace the following with your own database connection details
const database = 'your_database';
const username = 'your_username';
const password = 'your_password';
const host = 'your_host';
const dialect = 'postgres'; // Or 'mysql', 'sqlite', 'mssql' depending on your DB

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // It's also possible to specify database version, logging, etc.
  // version: '12.3', // for example, if you're using PostgreSQL
  // logging: console.log, // Default, you can use false if you don't want logging
});

module.exports = sequelize;
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
{
  "checklist": [
    {
      "step": "Install Sequelize and database driver",
      "completed": true
    },
    {
      "step": "Import Sequelize and set up connection details",
      "completed": true
    },
    {
      "step": "Configure connection pool options",
      "completed": true
    },
    {
      "step": "Export Sequelize instance",
      "completed": true
    },
    {
      "step": "Test database connection",
      "completed": true
    }
  ]
}