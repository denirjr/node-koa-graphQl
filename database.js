const mongoose = require('mongoose');

const initDB = (() => {
    mongoose.connect(
        'mongodb://admin:admin123@ds131905.mlab.com:31905/koa-graphql',
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database')
    })
})();

module.exports = initDB;