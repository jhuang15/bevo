const Inventory = require('../home/inventory');

module.exports = {
  index
};

function index(req, res) {
  Inventory.find({}, function(err, home) {
    res.render('home/index', {title: 'All inventory', home});
  });
}
