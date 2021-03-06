const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'please enter'
  },
  slug: String, 
  description: {
    type: String,
    trim: true
  },
  tags: [String]
}); 

 const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'please enter'
  },
  name: String, 
  address: String
}); 

storeSchema.pre('save',function(next){
  if(!this.isModified('name'))
  {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Store', storeSchema)
