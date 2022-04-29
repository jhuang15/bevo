const Inventory = require("../models/inventory");

module.exports = {
  create,
  delete: deleteNote,
};

function deleteNote(req, res) {
  Inventory.findOne({
    "notes._id": req.params.id,
    "notes.user": req.user._id,
  }).then(function (inventory) {
    console.log("not inventory: " + inventory);
    if (!inventory) return res.redirect("/inventories");
    //inventory.notes.remove(req.params.id);
    inventory
      .save()
      .then(function () {
        res.redirect(`/inventories/${inventory._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}

function create(req, res) {
  Inventory.findById(req.params.id, function (err, inventory) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    inventory.notes.push(req.body);
    inventory.save(function (err) {
      res.redirect(`/inventories/${req.params.id}`);
    });
  });
}
