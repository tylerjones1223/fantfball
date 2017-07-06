'use strict';

function byName (req, res, next) {
  var player = req.db.player;
  var name = req.params.name;

  player.findAll({
    where: {
      $iLike: '%' + name
    }
  })
  .then(function (players) {
    res.send(200, players);
    return next();
  });
}

module.exports = byName;