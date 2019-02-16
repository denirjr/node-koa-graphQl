const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GadgetSchema = new Schema({
  name: String,
  release_date: Date,
  by_company: String,
  price: Number,
});
let Gadget = mongoose.model('Gadget', GadgetSchema);
module.exports = Gadget;