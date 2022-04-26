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
}

function newItem(req, res) {
  res.render('inventories');
}

function create(req, res) {
  var inventory = new Inventory(req.body);
  inventory.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/inventories/new');
    console.log(inventory);
    //res.redirect(`/inventories/${inventory._id}`);
    res.render('/inventories/show');
  });
}
