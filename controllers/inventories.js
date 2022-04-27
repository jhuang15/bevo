const Inventory = require('../models/inventory');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem
};


function deleteItem(req,res, next) {
  Inventory.findById({_id: req.params.id}, function(inventory) {
    inventory.remove(req.params.id);
    inventory.save().then(function() {
      res.render('/inventories');
    }).catch(function(err) {
      console.log(err);
      return next(err);
      
    });
  });
}
/*
function deleteItem(req, res, next) {
  Inventory.findOne(req.params.id, function(err) {
      Inventory.remove(req.params.id);
      Inventory.save().then(function() {
      // Deleted item, so must redirect to index
      res.redirect('/inventories');

    });
  });
}
*/
function index(req, res) {
  Inventory.find({}, function(err, inventories) {
    res.render('inventories', {title: 'Inventory', inventories});
  });
}

function show(req, res) {
  Inventory.findById(req.params.id, function(err, inventory) {
    console.log(inventory);
    res.render('inventories/show', { title: 'Show Items', inventory})
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
