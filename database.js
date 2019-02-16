const mongoose = require('mongoose');

const initDB = (() => {
    mongoose.connect(
        //Mongo URL here ---> '',
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database')
    })
})();

module.exports = initDB;