const Inventory = require('../models/inventory');

module.exports = {
  index,
  show,
  new: newItem,
  create
};

function index(req, res) {
  Inventory.find({}, function(err, inventories) {
    res.render('inventories/', {title: 'All inventory', inventories});
  });
}

function show(req, res) {
}

function newItem(req, res) {
  res.render('inventories/new', { title: 'Add item' });
}

function create(req, res) {
  var inventory = new Inventory(req.body);
  inventory.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/inventories/new');
    console.log(inventory);
    //res.redirect(`/inventories/${inventory._id}`);
    res.render('inventories/');
  });
}
