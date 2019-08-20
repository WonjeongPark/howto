exports.index = function(req, res, next) {
    res.json([{
      name: 'Chris',
    }, {
      name: 'Sam'
    }]);
  };