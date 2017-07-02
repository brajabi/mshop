const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  
  // req.flash('info','something');
  res.render('index',{name : 'behnam'}); 

}

exports.addStore = (req, res) => {
  res.render('editStore',{title: 'AddStore'});
}

exports.createStore = async (req, res)=>{
  const store = new Store(req.body);
  
  await store.save();

  // req.flash('success',`successfullt ${store.name}`);
  res.redirect('/');
  
}

exports.getStores = async (req,res) =>{
  const stores = await Store.find();
  // console.log(stores);
  res.render('stores',{title: 'Stores' , stores});
}

exports.editStores = async (req,res) =>{
  const id = req.params.id; 
  const store = await Store.findOne({_id:id});
  
  // console.log(store);
  res.render('editStore',{title: 'Stores' , store});
}

exports.updateStores = async (req,res) =>{
  const id = req.params.id; 
  const store = await Store.findOneAndUpdate({_id:id}, req.body,{
    new: true,
    runValidator: true
  }).exec();
  req.flash('success','successfully saved in data base');
  // console.log(store);
  res.redirect(`/stores/${store._id}/edit`);
}
