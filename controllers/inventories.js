const Inventory = require('../models/inventory');

module.exports = {
  index,
  show,
  new: newItem,
  create
};

function index(req, res) {
  Inventory.find({}, function(err, inventories) {
    res.render('inventories', {title: 'Inventory', inventories});
  });
}

function show(req, res) {
  Inventory.find({}, function(err, inventories) {
    res.render('inventories/show', { title: 'Show Items', inventories})
  })
  //Inventory.findById(req.params.id).exec(function (err, inventories){
  //  res.render('inventories', { title: 'Item Details', inventories});
 // })
}

function newItem(req, res) {
  //res.render('inventories', { title: ' New Item' });
  res.render('inventories', { title: ' New Item' });
}

function create(req, res) {
  var inventory = new Inventory(req.body);
  inventory.save(function(err) {
    if (err) return console.log('Error'+inventory);
    console.log(inventory);
    //res.redirect(`/inventories/${inventory._id}`);
    //res.redirect('/inventories/show');
    res.redirect(`/inventories/${inventory._id}`);
  });
}
