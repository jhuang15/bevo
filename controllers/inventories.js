const Inventory = require('../models/inventory');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
  update
};

function update (req, res) {
  //console.log("Update:"+req.params.id);

  // using find, findById, findOne makes app crash, 
  //findbyidandupdate wont crash but wont do anything but pending
  Inventory.findByIdAndUpdate(req.params.id, req.body.id, {new:true}, function (err, inventory) {
    console.log('Error: '+err);
    inventory.brand = req.body.brand;
    //Inventory.id(req.params.id) = req.parms.id;
    inventory.save(function(err) {
      res.redirect(`/inventories/${inventory._id}`);
  });
  }); 
}

function deleteItem(req, res, next) {
  //only findByIdAndDelete will work
  Inventory.findByIdAndDelete(req.params.id, function (err) {
    //inventory.remove(req.params.id);
     //inventory.save().then(function () {
      res.redirect('/inventories');
    })
  //});
}

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

function create(req, res) {
  var inventory = new Inventory(req.body);
  inventory.save(function(err) {
    if (err) return console.log('Error'+inventory);
    console.log("Created:" +inventory);
    //res.redirect(`/inventories/${inventory._id}`);
    res.redirect('inventories');
  });
}
 
function newItem(req, res) {
  //res.render('inventories', { title: ' New Item' });
  res.render('inventories', { title: ' New Item' });
}