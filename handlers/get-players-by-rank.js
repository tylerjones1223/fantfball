'use strict';

function byRank (req, res, next) {
  var player = req.db.player;
  var position = req.params.position;
  var todayDate = new Date();
  var seasonStart = new Date(2017, 8, 7);

  if (seasonStart > todayDate) {
    player.findAll({
      where: {
        position: position
      },
      limit: 10,
      order: ['rank', 'DESC']
    })
    .then(function (players) {
      res.send(200, players);
    });
  } else {
    player.findAll({
      where: {
        position: position
      },
      // tbd
    })
    .then(function (players) {
      res.send(200, players);
    });
  }

  return next();
}

module.exports = byRank;