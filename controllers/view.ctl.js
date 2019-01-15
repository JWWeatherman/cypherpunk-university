const {resources, titleData: {title, subTitle}} = require('../resources')

function getIndex (req, res, next) {
  res.render('index', {title, subTitle, resources})
}

module.exports = {getIndex}
