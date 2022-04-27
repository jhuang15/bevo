const Inventory = require('../models/inventory');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem
};

/*
function deleteItem(req,res, next) {
  Inventory.findOne({'inventories._id': req.params.id, 'inventories.user': req.user._id}).then(function(inventory) {
    if (!inventory) return res.redirect('/inventories');
    inventory.remove(req.params.id);
    inventory.save().then(function() {
      res.redirect(`/inventories/${inventory._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}
*/
function deleteItem(req, res) {
  Inventories.findOneAndDelete(
    // Ensue that the item was created by the logged in user
    {_id: req.params.id, user: req.user._id}, function(err) {
      // Deleted item, so must redirect to index
      res.redirect('/inventories');
    }
  );
}

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
