'use strict';

function byPosition (req, res, next) {
  var player = req.db.player;
  var position = req.params.position;

  player.findAll({
    where: {
      position: position
    }
  })
  .then(function (players) {
    res.send(200, players);
    return next();
  });
}

module.exports = byPosition;